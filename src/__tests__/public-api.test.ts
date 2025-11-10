import { describe, it, expect } from 'vitest';
import { formatName } from '../index';

describe('Public API', () => {
  describe('formatName', () => {
    it('should format basic names correctly', () => {
      const cases = [
        ['john f. kennedy', 'John F. Kennedy'],
        ['mary smith ph.d.', 'Mary Smith Ph.D.'],
        ['robert jones jr.', 'Robert Jones Jr.'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should handle empty and invalid inputs', () => {
      const cases = [
        ['', ''],
        ['   ', ''],
        ['josé', 'José'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should respect formatting options', () => {
      expect(formatName('  josé maría  ', { trim: false })).toBe('  José María  ');
      expect(formatName('josé  maría', { normalizeSpaces: false })).toBe('José  María');
    });

    it('should normalize spaces by default', () => {
      const cases = [
        ['josé   maría   de    la    cruz', 'José María De La Cruz'],
        ['  maría  del  carmen  ', 'María Del Carmen'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatName(input)).toBe(expected);
      });
    });

    it('should handle locale-specific formatting', () => {
      const cases: Array<[string, { locale: string }, string]> = [
        ["marie d'aubigny", { locale: 'fr' }, "Marie d'aubigny"],
        ["giovanni d'amico", { locale: 'it' }, "Giovanni D'Amico"],
        ["patrick o'malley", { locale: 'ga' }, "Patrick O'Malley"],
      ];
      cases.forEach(([input, options, expected]) => {
        expect(formatName(input, options)).toBe(expected);
      });
    });
  });
});
