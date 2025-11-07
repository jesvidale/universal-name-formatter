import type { LanguageConfig } from '../types';

export const catalanConfig: LanguageConfig = {
  articles: ['el', 'els', 'la', 'les', "l'"],
  prepositions: ['de', "d'", 'del', 'dels', 'de la', 'de les'],
  conjunctions: ['i'],
  honorificPrefixes: ['sant', 'santa'],
  lowercaseWords: ['i', 'de', "d'"],
  apostropheRules: {
    apostrophePrefixes: ["d'", "l'"],
    keepPrefixLowercase: true,
    capitalizeAfterApostrophe: false,
  },
};
