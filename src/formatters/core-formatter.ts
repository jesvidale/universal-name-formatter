import { getLanguageConfig } from '../config/languages';
import { type LanguageConfig, SupportedLocale } from '../config/types';
import { type InternalFormatterOptions } from './types';
import { formatWithLocaleRules } from './language-formatter';
import {
  capitalizeFirst,
  isInitial,
  formatInitial,
  hasScottishPrefix,
  formatScottishName,
  hasWelshPatronymic,
  formatWelshPatronymic,
} from './utils';

// Re-export for internal use
export type { InternalFormatterOptions };

// Re-export utility functions that were previously exported
export {
  capitalizeFirst,
  isInitial,
  formatInitial,
  hasScottishPrefix,
  formatScottishName,
} from './utils';

/**
 * The main entry point for name formatting.
 * @param name The name to format
 * @param options Optional formatting configuration
 * @returns The formatted name
 */
export function formatName(name: string, options: InternalFormatterOptions = {}): string {
  const { trim = true, normalizeSpaces = true, locale } = options;

  if (!name || typeof name !== 'string') {
    return '';
  }

  // If locale is specified, use locale-specific formatting
  if (locale) {
    const config = getLanguageConfig(locale);
    if (config) {
      return formatWithLocaleRules(name, config, options);
    }
  }

  let processedName = name;
  let leadingSpaces = '';
  let trailingSpaces = '';

  // Preserve leading/trailing spaces if trim is false
  if (!trim) {
    const leadingMatch = processedName.match(/^(\s*)/);
    const trailingMatch = processedName.match(/(\s*)$/);
    leadingSpaces = leadingMatch ? leadingMatch[1] : '';
    trailingSpaces = trailingMatch ? trailingMatch[1] : '';
  }

  // Process the name
  processedName = processedName.trim();

  // Normalize spaces
  if (normalizeSpaces) {
    processedName = processedName.replace(/\s+/g, ' ');
  }

  // Split into words and process each
  const words = processedName.split(' ');
  const formattedWords = words.map((word, index) => formatWord(word, index, words.length));
  const result = formattedWords.join(' ');

  // Restore leading/trailing spaces if trim was false
  return trim ? result : leadingSpaces + result + trailingSpaces;
}

function formatWord(word: string, index: number, totalWords: number): string {
  if (!word) return word;

  const lowerWord = word.toLowerCase();

  // Handle initials
  if (isInitial(word)) {
    return formatInitial(word);
  }

  // Handle Scottish/Irish prefixes
  if (hasScottishPrefix(word)) {
    return formatScottishName(word);
  }

  // Handle Welsh patronymics
  if (hasWelshPatronymic(word, index, totalWords)) {
    return formatWelshPatronymic(word);
  }

  // Handle hyphenated words
  if (word.includes('-')) {
    return word
      .split('-')
      .map(part => formatWord(part, 0, 1))
      .join('-');
  }

  // Check for prefix rules (like d', l', o', etc.)
  const prefixFormatted = formatWithPrefixRules(word, lowerWord);
  if (prefixFormatted) {
    return prefixFormatted;
  }

  // Default: capitalize first letter
  return capitalizeFirst(word);
}

/**
 * Format word if it matches any language-specific prefix rules
 */
function formatWithPrefixRules(word: string, lowerWord: string): string | undefined {
  // Define supported languages with prefix rules
  const languagesWithPrefixes: SupportedLocale[] = [
    SupportedLocale.IRISH_GAELIC,
    SupportedLocale.FRENCH,
    SupportedLocale.DUTCH,
    SupportedLocale.ITALIAN,
    SupportedLocale.CATALAN,
  ];

  // Get and normalize prefix rules from all supported languages
  const prefixRules = languagesWithPrefixes
    .map(locale => getLanguageConfig(locale))
    .filter((config): config is LanguageConfig => config !== undefined)
    .flatMap(config =>
      config.apostropheRules.apostrophePrefixes.map(prefix => ({
        prefix,
        keepPrefixLowercase: config.apostropheRules.keepPrefixLowercase,
        capitalizeAfterApostrophe: config.apostropheRules.capitalizeAfterApostrophe,
      }))
    );

  // Find the first matching prefix rule
  const matchingRule = prefixRules.find(rule => lowerWord.startsWith(rule.prefix.toLowerCase()));

  if (!matchingRule) {
    return undefined;
  }

  // Apply the matching rule
  const { prefix, keepPrefixLowercase, capitalizeAfterApostrophe } = matchingRule;
  const remainingText = word.substring(prefix.length);

  if (keepPrefixLowercase) {
    return (
      prefix.toLowerCase() +
      (capitalizeAfterApostrophe ? capitalizeFirst(remainingText) : remainingText.toLowerCase())
    );
  }

  return capitalizeFirst(prefix) + capitalizeFirst(remainingText);
}
