/**
 * Type definitions for name formatters
 */
import { SupportedLocale } from '../config/types';

export interface InternalFormatterOptions {
  /** Whether to trim whitespace */
  trim?: boolean;
  /** Whether to handle multiple spaces */
  normalizeSpaces?: boolean;
  /** Language locale for specific formatting rules */
  locale?: SupportedLocale;
  /** Whether to preserve original casing for specific patterns */
  preserveCase?: boolean;
}

export interface FormattingResult {
  /** The formatted name */
  formatted: string;
  /** Whether any changes were made */
  changed: boolean;
  /** The locale used for formatting */
  locale: SupportedLocale;
  /** Any warnings or notes */
  warnings?: string[];
}
