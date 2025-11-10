import { describe, it, expect } from 'vitest';
import { formatName } from '../index';

describe('Public API', () => {
  describe('formatName', () => {
    const basicCases: Array<[string, string, string]> = [
      ['JFK', 'john f. kennedy', 'John F. Kennedy'],
      ['Ph.D.', 'mary smith ph.d.', 'Mary Smith Ph.D.'],
      ['Jr.', 'robert jones jr.', 'Robert Jones Jr.'],
      ['Empty', '', ''],
      ['Spaces only', '   ', ''],
      ['Single word', 'josé', 'José'],
      ['Normalize spaces 1', 'josé   maría   de    la    cruz', 'José María De La Cruz'],
      ['Normalize spaces 2', '  maría  del  carmen  ', 'María Del Carmen'],
    ];

    it.each(basicCases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatName(input)).toBe(expected);
    });

    it('should respect trim option', () => {
      expect(formatName('  josé maría  ', { trim: false })).toBe('  José María  ');
    });

    it('should respect normalizeSpaces option', () => {
      expect(formatName('josé  maría', { normalizeSpaces: false })).toBe('José  María');
    });

    const localeCases: Array<[string, string, { locale: string }, string]> = [
      ['French', "marie d'aubigny", { locale: 'fr' }, "Marie d'aubigny"],
      ['Italian', "giovanni d'amico", { locale: 'it' }, "Giovanni D'Amico"],
      ['Irish', "patrick o'malley", { locale: 'ga' }, "Patrick O'Malley"],
    ];

    it.each(localeCases)('%s locale: %s → %s', (_desc, input, options, expected) => {
      expect(formatName(input, options)).toBe(expected);
    });
  });
});
