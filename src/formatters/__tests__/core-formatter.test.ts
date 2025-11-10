import { describe, it, expect } from 'vitest';
import { formatName } from '../core-formatter';
import { SupportedLocale } from '../../config/types';

describe('Core Formatter', () => {
  const testCases: Array<[string, string, string]> = [
    // Basic name formatting
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
    // Special name patterns
    ['Scottish Mc', 'donald mcdonald', 'Donald McDonald'],
    ['Scottish Mc caps', 'MCDONALD', 'McDonald'],
    ['Scottish Mac', 'macleod', 'MacLeod'],
    ['Scottish Mac caps', 'MACARTHUR', 'MacArthur'],
    ['Hyphenated', 'jean-claude de la fontaine', 'Jean-Claude De La Fontaine'],
    ['Hyphenated 2', 'anne-marie martin', 'Anne-Marie Martin'],
    ['Initials J.R.R.', 'j.r.r. tolkien', 'J.R.R. Tolkien'],
    ['Initials A.B.C.', 'a.b.c. smith', 'A.B.C. Smith'],
    ['Initial F.', 'john f. kennedy', 'John F. Kennedy'],
    // Edge cases
    ['Empty', '', ''],
    ['Single space', ' ', ''],
    ['Multiple spaces', '   ', ''],
    ['Single word josé', 'josé', 'José'],
    ['Single word caps', 'MARIA', 'Maria'],
    ['Single word de', 'de', 'De'],
    ['All caps', 'JOHN DOE', 'John Doe'],
    ['All lowercase', 'mary jane smith', 'Mary Jane Smith'],
  ];

  it.each(testCases)('%s: %s → %s', (_desc, input, expected) => {
    expect(formatName(input)).toBe(expected);
  });

  describe('Formatting options', () => {
    it('should respect trim option', () => {
      expect(formatName('  john smith  ', { trim: false })).toBe('  John Smith  ');
      expect(formatName('  john smith  ', { trim: true })).toBe('John Smith');
      expect(formatName('  john smith  ')).toBe('John Smith');
    });

    it('should respect normalizeSpaces option', () => {
      expect(formatName('john    smith', { normalizeSpaces: false })).toBe('John    Smith');
      expect(formatName('john    smith', { normalizeSpaces: true })).toBe('John Smith');
      expect(formatName('john    smith')).toBe('John Smith');
    });

    const localeCases: Array<[string, string, { locale: SupportedLocale }, string]> = [
      ['French', "marie d'aubigny", { locale: SupportedLocale.FRENCH }, "Marie d'aubigny"],
      ['Italian', "giovanni d'amico", { locale: SupportedLocale.ITALIAN }, "Giovanni D'Amico"],
    ];

    it.each(localeCases)('%s locale: %s → %s', (_desc, input, options, expected) => {
      expect(formatName(input, options)).toBe(expected);
    });
  });
});
