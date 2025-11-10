/**
 * Universal Name Formatter
 *
 * Licensed under the MIT License
 *
 * A powerful, locale-aware name formatting utility that handles
 * international names with proper linguistic rules.
 */

import { formatName as internalFormatName } from './formatters/core-formatter';
import { type NameFormatterOptions } from './types';
import { SupportedLocale } from './config/types';

// Export all public APIs
export type { LocaleRules, NameFormatterOptions, FormattingResult } from './types';

/**
 * Convert string locale to SupportedLocale enum
 */
function convertLocale(locale?: string): SupportedLocale | undefined {
  if (!locale) return undefined;

  // Handle full locale codes like fr-FR, it-IT
  const baseLocale = locale.toLowerCase().split('-')[0].split('_')[0];

  // Map common locales to our enum values
  const localeMap: Record<string, SupportedLocale> = {
    en: SupportedLocale.ENGLISH,
    es: SupportedLocale.SPANISH,
    fr: SupportedLocale.FRENCH,
    it: SupportedLocale.ITALIAN,
    de: SupportedLocale.GERMAN,
    nl: SupportedLocale.DUTCH,
    ca: SupportedLocale.CATALAN,
    sv: SupportedLocale.SWEDISH,
    no: SupportedLocale.NORWEGIAN,
    da: SupportedLocale.DANISH,
    ga: SupportedLocale.IRISH_GAELIC,
    gd: SupportedLocale.SCOTTISH_GAELIC,
    cy: SupportedLocale.WELSH,
    gl: SupportedLocale.GALICIAN,
    pl: SupportedLocale.POLISH,
    cs: SupportedLocale.CZECH,
    ro: SupportedLocale.ROMANIAN,
  };

  return localeMap[baseLocale];
}

/**
 * Format a name with locale-aware rules
 * @param name The name to format
 * @param options Optional formatting configuration
 * @returns The formatted name
 */
export function formatName(name: string, options: NameFormatterOptions = {}): string {
  // Convert public API options to internal options
  const { customRules, preserveAccents, locale: localeString, ...internalOptions } = options;

  // Convert string locale to enum
  const locale = convertLocale(localeString);

  // Pass through the basic options (customRules and preserveAccents not yet implemented)
  void customRules;
  void preserveAccents;

  return internalFormatName(name, { ...internalOptions, locale });
}
