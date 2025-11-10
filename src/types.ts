/**
 * Universal Name Formatter - Type Definitions
 *
 * Licensed under the MIT License
 *
 * Type definitions for the Name Formatter utility
 */

export interface LocaleRules {
  /** Articles that should remain lowercase (e.g., "de", "da", "del") */
  articles: string[];
  /** Prepositions that should remain lowercase (e.g., "von", "van", "de") */
  prepositions: string[];
  /** Conjunctions that should remain lowercase (e.g., "y", "e", "and") */
  conjunctions: string[];
  /** Prefixes that should be handled specially (e.g., "d'", "o'", "l'") */
  apostrophePrefixes: string[];
  /** Special handling for hyphenated names */
  hyphenatedHandling: boolean;
  /** Whether to preserve original casing for specific patterns */
  preserveSpecialCasing: boolean;
}

export interface NameFormatterOptions {
  /** Whether to trim whitespace */
  trim?: boolean;
  /** Whether to handle multiple spaces */
  normalizeSpaces?: boolean;
  /** Whether to preserve accents and diacritics */
  preserveAccents?: boolean;
  /** Language locale for specific formatting rules (e.g., 'fr', 'it', 'en') */
  locale?: string;
  /** Custom rules to override defaults */
  customRules?: Partial<LocaleRules>;
}

export interface FormattingResult {
  /** The formatted name */
  formatted: string;
  /** Whether any changes were made */
  changed: boolean;
  /** The locale used for formatting */
  locale: string;
  /** Any warnings or notes */
  warnings?: string[];
}
