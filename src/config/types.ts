export interface LanguageConfig {
  /** Articles that should remain lowercase (e.g., "de", "da", "del") */
  articles: string[];
  /** Prepositions that should remain lowercase (e.g., "von", "van", "de") */
  prepositions: string[];
  /** Conjunctions that should remain lowercase (e.g., "y", "e", "and") */
  conjunctions: string[];
  /** Honorific prefixes (e.g., "san", "santo", "don") */
  honorificPrefixes: string[];
  /** Words that should always remain lowercase in names */
  lowercaseWords: string[];
  /** Rules for handling apostrophe patterns */
  apostropheRules: {
    /** Apostrophe prefixes like "d'", "l'", "o'" */
    apostrophePrefixes: string[];
    /** Whether to keep the prefix in lowercase */
    keepPrefixLowercase: boolean;
    /** Whether to capitalize the word after the apostrophe */
    capitalizeAfterApostrophe: boolean;
  };
  /** Known surnames that need special formatting rules for this language */
  knownSurnames?: string[];
}

export enum SupportedLocale {
  ENGLISH = 'en',
  SPANISH = 'es',
  FRENCH = 'fr',
  ITALIAN = 'it',
  GERMAN = 'de',
  DUTCH = 'nl',
  CATALAN = 'ca',
  SWEDISH = 'sv',
  NORWEGIAN = 'no',
  DANISH = 'da',
  IRISH_GAELIC = 'ga',
  SCOTTISH_GAELIC = 'gd',
  WELSH = 'cy',
  GALICIAN = 'gl',
  POLISH = 'pl',
  CZECH = 'cs',
  ROMANIAN = 'ro',
}

export const supportedLocales = Object.values(SupportedLocale);

export const localeDisplayNames: Record<SupportedLocale, string> = {
  [SupportedLocale.CATALAN]: 'Catalan',
  [SupportedLocale.CZECH]: 'Czech',
  [SupportedLocale.WELSH]: 'Welsh',
  [SupportedLocale.DANISH]: 'Danish',
  [SupportedLocale.GERMAN]: 'German',
  [SupportedLocale.ENGLISH]: 'English',
  [SupportedLocale.SPANISH]: 'Spanish',
  [SupportedLocale.FRENCH]: 'French',
  [SupportedLocale.IRISH_GAELIC]: 'Irish Gaelic',
  [SupportedLocale.SCOTTISH_GAELIC]: 'Scottish Gaelic',
  [SupportedLocale.GALICIAN]: 'Galician',
  [SupportedLocale.ITALIAN]: 'Italian',
  [SupportedLocale.DUTCH]: 'Dutch',
  [SupportedLocale.NORWEGIAN]: 'Norwegian',
  [SupportedLocale.POLISH]: 'Polish',
  [SupportedLocale.ROMANIAN]: 'Romanian',
  [SupportedLocale.SWEDISH]: 'Swedish',
};
