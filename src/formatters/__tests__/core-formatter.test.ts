import { describe, it, expect } from 'vitest';
import { formatName } from '../core-formatter';
import { SupportedLocale } from '../../config/types';

describe('Core Formatter', () => {
  describe('Basic name formatting', () => {
    it('should format English names correctly', () => {
      expect(formatName('john f. kennedy')).toBe('John F. Kennedy');
      expect(formatName('elizabeth of york')).toBe('Elizabeth Of York');
      expect(formatName('william and mary')).toBe('William And Mary');
    });

    it('should format names with different European origins', () => {
      expect(formatName('hans von neumann')).toBe('Hans Von Neumann');
      expect(formatName('ludwig van beethoven')).toBe('Ludwig Van Beethoven');
      expect(formatName('jan van der waals')).toBe('Jan Van Der Waals');
      expect(formatName('leonardo da vinci')).toBe('Leonardo Da Vinci');
    });

    it('should format Eastern European names', () => {
      expect(formatName('václav ze zlína')).toBe('Václav Ze Zlína');
      expect(formatName('jana z praha')).toBe('Jana Z Praha');
      expect(formatName('ana din brasov')).toBe('Ana Din Brasov');
      expect(formatName('ion către bucuresti')).toBe('Ion Către Bucuresti');
    });

    it('should format Polish names correctly', () => {
      expect(formatName('jan z warszawy')).toBe('Jan Z Warszawy');
      expect(formatName('maria z krakowa')).toBe('Maria Z Krakowa');
      expect(formatName('piotr w krakow')).toBe('Piotr W Krakow');
    });
  });

  describe('Special name patterns', () => {
    it('should format Scottish/Irish names correctly', () => {
      expect(formatName('donald mcdonald')).toBe('Donald McDonald');
      expect(formatName('MCDONALD')).toBe('McDonald');
      expect(formatName('macleod')).toBe('MacLeod');
      expect(formatName('MACARTHUR')).toBe('MacArthur');
    });

    it('should format hyphenated names correctly', () => {
      expect(formatName('jean-claude de la fontaine')).toBe('Jean-Claude De La Fontaine');
      expect(formatName('anne-marie martin')).toBe('Anne-Marie Martin');
    });

    it('should format names with initials correctly', () => {
      expect(formatName('j.r.r. tolkien')).toBe('J.R.R. Tolkien');
      expect(formatName('a.b.c. smith')).toBe('A.B.C. Smith');
      expect(formatName('john f. kennedy')).toBe('John F. Kennedy');
    });
  });

  describe('Formatting options', () => {
    it('should respect trim option', () => {
      expect(formatName('  john smith  ', { trim: false })).toBe('  John Smith  ');
      expect(formatName('  john smith  ', { trim: true })).toBe('John Smith');
      expect(formatName('  john smith  ')).toBe('John Smith'); // default is true
    });

    it('should respect normalizeSpaces option', () => {
      expect(formatName('john    smith', { normalizeSpaces: false })).toBe('John    Smith');
      expect(formatName('john    smith', { normalizeSpaces: true })).toBe('John Smith');
      expect(formatName('john    smith')).toBe('John Smith'); // default is true
    });

    it('should handle locale parameter', () => {
      expect(formatName("marie d'aubigny", { locale: SupportedLocale.FRENCH })).toBe(
        "Marie d'aubigny"
      );
      expect(formatName("giovanni d'amico", { locale: SupportedLocale.ITALIAN })).toBe(
        "Giovanni D'Amico"
      );
    });
  });

  describe('Edge cases', () => {
    it('should handle edge cases', () => {
      expect(formatName('')).toBe('');
      expect(formatName(' ')).toBe('');
      expect(formatName('   ')).toBe('');
    });

    it('should handle single words', () => {
      expect(formatName('josé')).toBe('José');
      expect(formatName('MARIA')).toBe('Maria');
      expect(formatName('de')).toBe('De'); // Single word should be capitalized
    });

    it('should handle complex capitalization', () => {
      expect(formatName('JOHN DOE')).toBe('John Doe');
      expect(formatName('mary jane smith')).toBe('Mary Jane Smith');
    });
  });
});
