import { type LanguageConfig } from '../config/types';
import { type InternalFormatterOptions } from './types';
import { capitalizeFirst } from './utils';

export function formatWithLocaleRules(
  name: string,
  config: LanguageConfig,
  options: InternalFormatterOptions = {}
): string {
  const {
    trim = true,
    normalizeSpaces = true,
    preserveCase = false,
  } = options as {
    trim?: boolean;
    normalizeSpaces?: boolean;
    preserveCase?: boolean;
  };

  if (!name) return '';

  let processedName = name;

  // Preserve spaces handling using RegExp.exec()
  const leadingMatch = /^\s*/.exec(name);
  const trailingMatch = /\s*$/.exec(name);

  let leadingSpaces = '';
  if (!trim && leadingMatch) {
    leadingSpaces = leadingMatch[0];
  }

  let trailingSpaces = '';
  if (!trim && trailingMatch) {
    trailingSpaces = trailingMatch[0];
  }

  // Basic cleaning
  processedName = processedName.trim();
  if (normalizeSpaces) {
    // Replace all multiple spaces with single space (regex with /g flag)
    processedName = processedName.replace(/\s+/g, ' ');
  }

  // Split into words and format each
  const words = processedName.split(' ');
  const formattedWords = words.map((word, index) =>
    formatWordWithLocale(word, index === 0, config, Boolean(preserveCase))
  );

  return leadingSpaces + formattedWords.join(' ') + trailingSpaces;
}

function formatWordWithLocale(
  word: string,
  isFirst: boolean,
  config: LanguageConfig,
  preserveCase: boolean
): string {
  if (!word) return word;
  if (preserveCase) return word;

  const lowerWord = word.toLowerCase();

  // Check if it's a special surname for this language
  if (config.knownSurnames?.includes(lowerWord)) {
    // Handle surname based on language rules
    return handleSurname(word, config);
  }

  // Handle prepositions, articles and exceptions
  if (
    !isFirst &&
    (config.prepositions.includes(lowerWord) ||
      config.articles.includes(lowerWord) ||
      config.lowercaseWords.includes(lowerWord))
  ) {
    return lowerWord;
  }

  // Handle apostrophes
  if (word.includes("'")) {
    return handleApostrophe(word, config);
  }

  // Handle hyphenated words
  if (word.includes('-')) {
    return word
      .split('-')
      .map(part => formatWordWithLocale(part, true, config, preserveCase))
      .join('-');
  }

  // Default to capitalization
  return capitalizeFirst(word);
}

function handleApostrophe(word: string, config: LanguageConfig): string {
  const [prefix, ...rest] = word.split("'");
  const suffix = rest.join("'");

  if (config.apostropheRules.apostrophePrefixes.includes(prefix.toLowerCase() + "'")) {
    if (config.apostropheRules.keepPrefixLowercase) {
      return (
        prefix.toLowerCase() +
        "'" +
        (config.apostropheRules.capitalizeAfterApostrophe
          ? capitalizeFirst(suffix)
          : suffix.toLowerCase())
      );
    }
  }

  return capitalizeFirst(prefix) + "'" + capitalizeFirst(suffix);
}

function handleSurname(word: string, config: LanguageConfig): string {
  const hasApostrophe = word.includes("'");

  // If it's a surname with an apostrophe, use apostrophe rules
  if (hasApostrophe) {
    return handleApostrophe(word, config);
  }

  // For other surnames, apply standard capitalization
  return capitalizeFirst(word);
}

// Using capitalizeWord from universal-patterns
