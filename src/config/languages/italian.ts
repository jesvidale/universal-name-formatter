import type { LanguageConfig } from '../types';

export const italianConfig: LanguageConfig = {
  articles: ['il', 'lo', 'la', 'i', 'gli', 'le'],
  prepositions: ['di', 'da', 'dal', 'dalla', 'dello', 'della', 'dei', 'degli', 'delle'],
  conjunctions: ['e'],
  honorificPrefixes: ['san', 'santo', 'santa'],
  lowercaseWords: ['di', 'da', 'dal', 'della', 'dei', 'degli', 'delle'],
  apostropheRules: {
    apostrophePrefixes: ["d'", "dell'"],
    keepPrefixLowercase: false,
    capitalizeAfterApostrophe: true,
  },
  knownSurnames: [
    'amico',
    'angelo',
    'alessandro',
    'amato',
    'antonio',
    'emilio',
    'avila',
    'annunzio',
  ],
};
