import { describe, it, expect } from 'vitest';
import { formatName } from '../core-formatter';
import { SupportedLocale } from '../../config/types';

describe('Core Formatter', () => {
  describe('Basic name formatting', () => {
    const cases: Array<[string, string, string]> = [
      ['English', 'john f. kennedy', 'John F. Kennedy'],
      ['English of', 'elizabeth of york', 'Elizabeth Of York'],
      ['German von', 'hans von neumann', 'Hans Von Neumann'],
      ['Dutch van', 'ludwig van beethoven', 'Ludwig Van Beethoven'],
      ['Dutch van der', 'jan van der waals', 'Jan Van Der Waals'],
      ['Italian da', 'leonardo da vinci', 'Leonardo Da Vinci'],
      ['Czech ze', 'václav ze zlína', 'Václav Ze Zlína'],
      ['Czech z', 'jana z praha', 'Jana Z Praha'],
      ['Romanian din', 'ana din brasov', 'Ana Din Brasov'],
      ['Polish z', 'jan z warszawy', 'Jan Z Warszawy'],
      ['Polish z 2', 'maria z krakowa', 'Maria Z Krakowa'],
      ['Polish w', 'piotr w krakow', 'Piotr W Krakow'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatName(input)).toBe(expected);
    });
  });

  describe('Special name patterns', () => {
    const cases: Array<[string, string, string]> = [
      ['Scottish Mc', 'donald mcdonald', 'Donald McDonald'],
      ['Scottish Mc caps', 'MCDONALD', 'McDonald'],
      ['Scottish Mac', 'macleod', 'MacLeod'],
      ['Scottish Mac caps', 'MACARTHUR', 'MacArthur'],
      ['Hyphenated', 'jean-claude de la fontaine', 'Jean-Claude De La Fontaine'],
      ['Hyphenated 2', 'anne-marie martin', 'Anne-Marie Martin'],
      ['Initials J.R.R.', 'j.r.r. tolkien', 'J.R.R. Tolkien'],
      ['Initials A.B.C.', 'a.b.c. smith', 'A.B.C. Smith'],
      ['Initial F.', 'john f. kennedy', 'John F. Kennedy'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatName(input)).toBe(expected);
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
    const cases: Array<[string, string, string]> = [
      ['Empty', '', ''],
      ['Single space', ' ', ''],
      ['Multiple spaces', '   ', ''],
      ['Single word josé', 'josé', 'José'],
      ['Single word caps', 'MARIA', 'Maria'],
      ['Single word de', 'de', 'De'],
      ['All caps', 'JOHN DOE', 'John Doe'],
      ['All lowercase', 'mary jane smith', 'Mary Jane Smith'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatName(input)).toBe(expected);
    });
  });
});
