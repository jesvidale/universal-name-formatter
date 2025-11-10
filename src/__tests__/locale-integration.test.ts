import { describe, it, expect } from 'vitest';
import { formatName } from '../index';

describe('Locale Integration', () => {
  describe('French locale (fr)', () => {
    it('should handle French apostrophes correctly', () => {
      const cases = [
        ["marie d'aubigny", "Marie d'aubigny"],
        ["charles d'artagnan", "Charles d'artagnan"],
        ["jean d'alembert", "Jean d'alembert"],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'fr' })).toBe(expected);
      });
    });

    it('should handle mixed nationalities with French locale', () => {
      const cases = [
        ["giovanni d'amico", "Giovanni d'amico"],
        ["marco d'angelo", "Marco d'angelo"],
        ["patrick o'malley", "Patrick O'Malley"],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'fr' })).toBe(expected);
      });
    });
  });

  describe('Italian locale (it)', () => {
    it('should handle Italian apostrophes correctly', () => {
      const cases = [
        ["giovanni d'amico", "Giovanni D'Amico"],
        ["marco d'alessandro", "Marco D'Alessandro"],
        ["giulia d'antonio", "Giulia D'Antonio"],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'it' })).toBe(expected);
      });
    });

    it('should handle mixed nationalities with Italian locale', () => {
      const cases = [
        ["marie d'aubigny", "Marie D'Aubigny"],
        ["charles d'artagnan", "Charles D'Artagnan"],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'it' })).toBe(expected);
      });
    });
  });

  describe('Spanish locale (es)', () => {
    it('should handle Spanish names with various prepositions', () => {
      const cases = [
        ['maría de la cruz', 'María de la Cruz'],
        ['josé maría de los santos', 'José María de los Santos'],
        ['ana del carmen', 'Ana del Carmen'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'es' })).toBe(expected);
      });
    });

    it('should handle mixed nationalities with Spanish locale', () => {
      const cases = [
        ["giovanni d'amico", "Giovanni D'Amico"],
        ["francesco d'angelo", "Francesco D'Angelo"],
        ["marie d'aubigny", "Marie D'Aubigny"],
        ["charles d'artagnan", "Charles D'Artagnan"],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'es' })).toBe(expected);
      });
    });
  });

  describe('Welsh locale (cy)', () => {
    it('should handle Welsh patronymics correctly', () => {
      const cases = [
        ['sian ab owain', 'Sian ab Owain'],
        ['bethan ferch morgan', 'Bethan ferch Morgan'],
        ['dafydd ap llewelyn', 'Dafydd ap Llewelyn'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input, { locale: 'cy' })).toBe(expected);
      });
    });
  });

  describe('Multiple languages without locale specified', () => {
    it('should format names correctly regardless of origin', () => {
      const cases = [
        ['maría de la cruz', 'María De La Cruz'],
        ['jean-claude de la fontaine', 'Jean-Claude De La Fontaine'],
        ['hans von neumann', 'Hans Von Neumann'],
        ['jan van der waals', 'Jan Van Der Waals'],
        ['leonardo da vinci', 'Leonardo Da Vinci'],
        ["patrick o'malley", "Patrick O'Malley"],
        ['donald mcdonald', 'Donald McDonald'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });
  });
});
