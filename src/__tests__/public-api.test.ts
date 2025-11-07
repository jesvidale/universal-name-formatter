import { describe, it, expect } from 'vitest';
import { formatName } from '../index';

describe('Public API', () => {
  describe('formatName', () => {
    it('should format basic names correctly', () => {
      expect(formatName('john f. kennedy')).toBe('John F. Kennedy');
      expect(formatName('mary smith ph.d.')).toBe('Mary Smith Ph.D.');
      expect(formatName('robert jones jr.')).toBe('Robert Jones Jr.');
    });

    it('should handle empty and invalid inputs', () => {
      expect(formatName('')).toBe('');
      expect(formatName('   ')).toBe('');
      expect(formatName('josé')).toBe('José');
    });

    it('should respect formatting options', () => {
      expect(formatName('  josé maría  ', { trim: false })).toBe('  José María  ');
      expect(formatName('josé  maría', { normalizeSpaces: false })).toBe('José  María');
    });

    it('should normalize spaces by default', () => {
      expect(formatName('josé   maría   de    la    cruz')).toBe('José María De La Cruz');
      expect(formatName('  maría  del  carmen  ')).toBe('María Del Carmen');
    });

    it('should handle locale-specific formatting', () => {
      expect(formatName("marie d'aubigny", { locale: 'fr' })).toBe("Marie d'aubigny");
      expect(formatName("giovanni d'amico", { locale: 'it' })).toBe("Giovanni D'Amico");
      expect(formatName("patrick o'malley", { locale: 'ga' })).toBe("Patrick O'Malley");
    });
  });
});
