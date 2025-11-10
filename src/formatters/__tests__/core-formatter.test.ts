import { describe, it, expect } from 'vitest';
import { formatName } from '../core-formatter';
import { SupportedLocale } from '../../config/types';

describe('Core Formatter', () => {
  describe('Basic name formatting', () => {
    it('should format English names correctly', () => {
      const cases = [
        ['john f. kennedy', 'John F. Kennedy'],
        ['elizabeth of york', 'Elizabeth Of York'],
        ['william and mary', 'William And Mary'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should format names with different European origins', () => {
      const cases = [
        ['hans von neumann', 'Hans Von Neumann'],
        ['ludwig van beethoven', 'Ludwig Van Beethoven'],
        ['jan van der waals', 'Jan Van Der Waals'],
        ['leonardo da vinci', 'Leonardo Da Vinci'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should format Eastern European names', () => {
      const cases = [
        ['václav ze zlína', 'Václav Ze Zlína'],
        ['jana z praha', 'Jana Z Praha'],
        ['ana din brasov', 'Ana Din Brasov'],
        ['ion către bucuresti', 'Ion Către Bucuresti'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should format Polish names correctly', () => {
      const cases = [
        ['jan z warszawy', 'Jan Z Warszawy'],
        ['maria z krakowa', 'Maria Z Krakowa'],
        ['piotr w krakow', 'Piotr W Krakow'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });
  });

  describe('Special name patterns', () => {
    it('should format Scottish/Irish names correctly', () => {
      const cases = [
        ['donald mcdonald', 'Donald McDonald'],
        ['MCDONALD', 'McDonald'],
        ['macleod', 'MacLeod'],
        ['MACARTHUR', 'MacArthur'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should format hyphenated names correctly', () => {
      const cases = [
        ['jean-claude de la fontaine', 'Jean-Claude De La Fontaine'],
        ['anne-marie martin', 'Anne-Marie Martin'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should format names with initials correctly', () => {
      const cases = [
        ['j.r.r. tolkien', 'J.R.R. Tolkien'],
        ['a.b.c. smith', 'A.B.C. Smith'],
        ['john f. kennedy', 'John F. Kennedy'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
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
      const cases: Array<[string, { locale: SupportedLocale }, string]> = [
        ["marie d'aubigny", { locale: SupportedLocale.FRENCH }, "Marie d'aubigny"],
        ["giovanni d'amico", { locale: SupportedLocale.ITALIAN }, "Giovanni D'Amico"],
      ];
      cases.forEach(([input, options, expected]) => {
        expect(formatName(input, options)).toBe(expected);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle edge cases', () => {
      const cases = [
        ['', ''],
        [' ', ''],
        ['   ', ''],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should handle single words', () => {
      const cases = [
        ['josé', 'José'],
        ['MARIA', 'Maria'],
        ['de', 'De'], // Single word should be capitalized
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should handle complex capitalization', () => {
      const cases = [
        ['JOHN DOE', 'John Doe'],
        ['mary jane smith', 'Mary Jane Smith'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });
  });
});
