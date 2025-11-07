import type { LanguageConfig } from '../types';

export const englishConfig: LanguageConfig = {
  articles: ['a', 'an', 'the'],
  prepositions: ['of', 'in', 'at', 'by', 'for', 'from', 'to', 'with', 'on', 'over', 'under'],
  conjunctions: ['and', 'but', 'or', 'nor'],
  honorificPrefixes: ['van', 'von', 'de', 'del', 'della', 'di', 'da', 'mac', 'mc'],
  lowercaseWords: [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'nor',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'to',
    'up',
    'yet',
  ],
  apostropheRules: {
    apostrophePrefixes: [],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: [],
};
