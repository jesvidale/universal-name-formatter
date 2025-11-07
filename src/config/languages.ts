import { type LanguageConfig, SupportedLocale, supportedLocales } from './types';
import { englishConfig } from './languages/english';
import { spanishConfig } from './languages/spanish';
import { frenchConfig } from './languages/french';
import { italianConfig } from './languages/italian';
import { germanConfig } from './languages/german';
import { dutchConfig } from './languages/dutch';
import { catalanConfig } from './languages/catalan';
import { swedishConfig } from './languages/swedish';
import { norwegianConfig } from './languages/norwegian';
import { danishConfig } from './languages/danish';
import { scottishConfig } from './languages/scottish';
import { irishConfig } from './languages/irish';
import { galicianConfig } from './languages/galician';
import { polishConfig } from './languages/polish';
import { czechConfig } from './languages/czech';
import { romanianConfig } from './languages/romanian';
import { welshConfig } from './languages/welsh';

const languageConfigs: Partial<Record<SupportedLocale, LanguageConfig>> = {
  [SupportedLocale.ENGLISH]: englishConfig,
  [SupportedLocale.SPANISH]: spanishConfig,
  [SupportedLocale.FRENCH]: frenchConfig,
  [SupportedLocale.ITALIAN]: italianConfig,
  [SupportedLocale.GERMAN]: germanConfig,
  [SupportedLocale.DUTCH]: dutchConfig,
  [SupportedLocale.CATALAN]: catalanConfig,
  [SupportedLocale.SWEDISH]: swedishConfig,
  [SupportedLocale.NORWEGIAN]: norwegianConfig,
  [SupportedLocale.DANISH]: danishConfig,
  [SupportedLocale.IRISH_GAELIC]: irishConfig,
  [SupportedLocale.SCOTTISH_GAELIC]: scottishConfig,
  [SupportedLocale.WELSH]: welshConfig,
  [SupportedLocale.GALICIAN]: galicianConfig,
  [SupportedLocale.POLISH]: polishConfig,
  [SupportedLocale.CZECH]: czechConfig,
  [SupportedLocale.ROMANIAN]: romanianConfig,
};

export function getLanguageConfig(locale: string): LanguageConfig | null {
  return languageConfigs[locale as SupportedLocale] || null;
}

export function getSupportedLocales(): readonly string[] {
  return supportedLocales;
}

export * from './languages/english';
export * from './languages/spanish';
export * from './languages/french';
export * from './languages/italian';
export * from './languages/german';
export * from './languages/dutch';
export * from './languages/catalan';
export * from './languages/swedish';
export * from './languages/norwegian';
export * from './languages/danish';
export * from './languages/irish';
export * from './languages/scottish';
export * from './languages/welsh';
export * from './languages/galician';
export * from './languages/polish';
export * from './languages/czech';
export * from './languages/romanian';
