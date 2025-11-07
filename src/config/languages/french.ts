import type { LanguageConfig } from '../types';

export const frenchConfig: LanguageConfig = {
  articles: ['le', 'la', 'les', "l'"],
  prepositions: ["d'", 'de', 'du', 'des', 'de la', 'de les'],
  conjunctions: ['et'],
  honorificPrefixes: ['saint', 'sainte'],
  lowercaseWords: ['de', "d'", 'le', 'la', 'les'],
  apostropheRules: {
    apostrophePrefixes: ["d'", "l'"],
    keepPrefixLowercase: true,
    capitalizeAfterApostrophe: false,
  },
  knownSurnames: ['aubigny', 'orléans', 'orleans', 'artagnan', 'alembert', 'artois', 'anjou'],
};
