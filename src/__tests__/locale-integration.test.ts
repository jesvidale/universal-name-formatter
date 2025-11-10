import { describe, it, expect } from 'vitest';
import { formatName } from '../index';

describe('Locale Integration', () => {
  const localeCases: Array<[string, string, string, { locale?: string }]> = [
    // French locale - keeps apostrophe lowercase
    ['French apostrophes', "marie d'aubigny", "Marie d'aubigny", { locale: 'fr' }],
    ['French mixed nationality', "patrick o'malley", "Patrick O'Malley", { locale: 'fr' }],

    // Italian locale - capitalizes after apostrophe
    ['Italian apostrophes', "giovanni d'amico", "Giovanni D'Amico", { locale: 'it' }],
    ['Italian mixed nationality', "marie d'aubigny", "Marie D'Aubigny", { locale: 'it' }],

    // Spanish locale - handles prepositions
    ['Spanish prepositions', 'maría de la cruz', 'María de la Cruz', { locale: 'es' }],
    ['Spanish compound', 'josé maría de los santos', 'José María de los Santos', { locale: 'es' }],
    ['Spanish mixed nationality', "giovanni d'amico", "Giovanni D'Amico", { locale: 'es' }],

    // Welsh locale - handles patronymics
    ['Welsh patronymics ab', 'sian ab owain', 'Sian ab Owain', { locale: 'cy' }],
    ['Welsh patronymics ferch', 'bethan ferch morgan', 'Bethan ferch Morgan', { locale: 'cy' }],
    ['Welsh patronymics ap', 'dafydd ap llewelyn', 'Dafydd ap Llewelyn', { locale: 'cy' }],

    // No locale - default behavior
    ['Default Spanish', 'maría de la cruz', 'María De La Cruz', {}],
    ['Default French', 'jean-claude de la fontaine', 'Jean-Claude De La Fontaine', {}],
    ['Default German', 'hans von neumann', 'Hans Von Neumann', {}],
    ['Default Dutch', 'jan van der waals', 'Jan Van Der Waals', {}],
    ['Default Italian', 'leonardo da vinci', 'Leonardo Da Vinci', {}],
    ['Default Irish', "patrick o'malley", "Patrick O'Malley", {}],
    ['Default Scottish', 'donald mcdonald', 'Donald McDonald', {}],
  ];

  it.each(localeCases)('%s: %s → %s', (_desc, input, expected, options) => {
    expect(formatName(input, options)).toBe(expected);
  });
});
