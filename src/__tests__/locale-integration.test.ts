import { describe, it, expect } from 'vitest';
import { formatName } from '../index';

describe('Locale Integration', () => {
  describe('French locale (fr)', () => {
    it('should handle French apostrophes correctly', () => {
      expect(formatName("marie d'aubigny", { locale: 'fr' })).toBe("Marie d'aubigny");
      expect(formatName("charles d'artagnan", { locale: 'fr' })).toBe("Charles d'artagnan");
      expect(formatName("jean d'alembert", { locale: 'fr' })).toBe("Jean d'alembert");
    });

    it('should handle mixed nationalities with French locale', () => {
      expect(formatName("giovanni d'amico", { locale: 'fr' })).toBe("Giovanni d'amico");
      expect(formatName("marco d'angelo", { locale: 'fr' })).toBe("Marco d'angelo");
      expect(formatName("patrick o'malley", { locale: 'fr' })).toBe("Patrick O'Malley");
    });
  });

  describe('Italian locale (it)', () => {
    it('should handle Italian apostrophes correctly', () => {
      expect(formatName("giovanni d'amico", { locale: 'it' })).toBe("Giovanni D'Amico");
      expect(formatName("marco d'alessandro", { locale: 'it' })).toBe("Marco D'Alessandro");
      expect(formatName("giulia d'antonio", { locale: 'it' })).toBe("Giulia D'Antonio");
    });

    it('should handle mixed nationalities with Italian locale', () => {
      expect(formatName("marie d'aubigny", { locale: 'it' })).toBe("Marie D'Aubigny");
      expect(formatName("charles d'artagnan", { locale: 'it' })).toBe("Charles D'Artagnan");
    });
  });

  describe('Spanish locale (es)', () => {
    it('should handle Spanish names with various prepositions', () => {
      expect(formatName('maría de la cruz', { locale: 'es' })).toBe('María de la Cruz');
      expect(formatName('josé maría de los santos', { locale: 'es' })).toBe(
        'José María de los Santos'
      );
      expect(formatName('ana del carmen', { locale: 'es' })).toBe('Ana del Carmen');
    });

    it('should handle mixed nationalities with Spanish locale', () => {
      expect(formatName("giovanni d'amico", { locale: 'es' })).toBe("Giovanni D'Amico");
      expect(formatName("francesco d'angelo", { locale: 'es' })).toBe("Francesco D'Angelo");
      expect(formatName("marie d'aubigny", { locale: 'es' })).toBe("Marie D'Aubigny");
      expect(formatName("charles d'artagnan", { locale: 'es' })).toBe("Charles D'Artagnan");
    });
  });

  describe('Welsh locale (cy)', () => {
    it('should handle Welsh patronymics correctly', () => {
      expect(formatName('sian ab owain', { locale: 'cy' })).toBe('Sian ab Owain');
      expect(formatName('bethan ferch morgan', { locale: 'cy' })).toBe('Bethan ferch Morgan');
      expect(formatName('dafydd ap llewelyn', { locale: 'cy' })).toBe('Dafydd ap Llewelyn');
    });
  });

  describe('Multiple languages without locale specified', () => {
    it('should format names correctly regardless of origin', () => {
      expect(formatName('maría de la cruz')).toBe('María De La Cruz');
      expect(formatName('jean-claude de la fontaine')).toBe('Jean-Claude De La Fontaine');
      expect(formatName('hans von neumann')).toBe('Hans Von Neumann');
      expect(formatName('jan van der waals')).toBe('Jan Van Der Waals');
      expect(formatName('leonardo da vinci')).toBe('Leonardo Da Vinci');
      expect(formatName("patrick o'malley")).toBe("Patrick O'Malley");
      expect(formatName('donald mcdonald')).toBe('Donald McDonald');
    });
  });
});
