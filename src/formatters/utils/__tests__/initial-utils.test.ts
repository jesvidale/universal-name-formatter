import { describe, it, expect } from 'vitest';
import { isInitial, formatInitial } from '../initial-utils';

describe('initial-utils', () => {
  describe('isInitial', () => {
    it('should identify single initials correctly', () => {
      expect(isInitial('J.')).toBe(true);
      expect(isInitial('F.')).toBe(true);
      expect(isInitial('k.')).toBe(true);
    });

    it('should identify multiple initials correctly', () => {
      expect(isInitial('J.R.R.')).toBe(true);
      expect(isInitial('A.B.C.')).toBe(true);
      expect(isInitial('j.r.r.')).toBe(true);
    });

    it('should identify academic titles', () => {
      expect(isInitial('Ph.D.')).toBe(true);
      expect(isInitial('M.D.')).toBe(true);
      expect(isInitial('Jr.')).toBe(true);
      expect(isInitial('Sr.')).toBe(true);
    });

    it('should identify Roman numerals', () => {
      expect(isInitial('II')).toBe(true);
      expect(isInitial('III')).toBe(true);
      expect(isInitial('IV')).toBe(true);
      expect(isInitial('V')).toBe(true);
      expect(isInitial('VI')).toBe(true);
    });

    it('should reject regular words', () => {
      expect(isInitial('John')).toBe(false);
      expect(isInitial('Smith')).toBe(false);
      expect(isInitial('hello')).toBe(false);
    });

    it('should reject invalid patterns', () => {
      expect(isInitial('J')).toBe(false);
      expect(isInitial('J.R')).toBe(false);
      expect(isInitial('Ph.D')).toBe(false);
    });
  });

  describe('formatInitial', () => {
    it('should format academic titles correctly', () => {
      expect(formatInitial('ph.d.')).toBe('Ph.D.');
      expect(formatInitial('PH.D.')).toBe('Ph.D.');
      expect(formatInitial('m.d.')).toBe('M.D.');
      expect(formatInitial('M.D.')).toBe('M.D.');
    });

    it('should format Jr/Sr correctly', () => {
      expect(formatInitial('jr.')).toBe('Jr.');
      expect(formatInitial('JR.')).toBe('Jr.');
      expect(formatInitial('sr.')).toBe('Sr.');
      expect(formatInitial('SR.')).toBe('Sr.');
    });

    it('should format Roman numerals correctly', () => {
      expect(formatInitial('ii')).toBe('II');
      expect(formatInitial('iii')).toBe('III');
      expect(formatInitial('iv')).toBe('IV');
      expect(formatInitial('v')).toBe('V');
      expect(formatInitial('vi')).toBe('VI');
    });

    it('should format single initials correctly', () => {
      expect(formatInitial('j.')).toBe('J.');
      expect(formatInitial('f.')).toBe('F.');
      expect(formatInitial('K.')).toBe('K.');
    });

    it('should format multiple initials correctly', () => {
      expect(formatInitial('j.r.r.')).toBe('J.R.R.');
      expect(formatInitial('a.b.c.')).toBe('A.B.C.');
      expect(formatInitial('J.R.R.')).toBe('J.R.R.');
    });

    it('should handle mixed case initials', () => {
      expect(formatInitial('j.R.r.')).toBe('J.R.R.');
      expect(formatInitial('A.b.C.')).toBe('A.B.C.');
    });
  });
});
