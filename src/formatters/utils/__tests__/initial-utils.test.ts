import { describe, it, expect } from 'vitest';
import { isInitial, formatInitial } from '../initial-utils';

describe('initial-utils', () => {
  describe('isInitial', () => {
    it('should identify single initials correctly', () => {
      const cases = ['J.', 'F.', 'k.'];
      cases.forEach(input => {
        expect(isInitial(input)).toBe(true);
      });
    });

    it('should identify multiple initials correctly', () => {
      const cases = ['J.R.R.', 'A.B.C.', 'j.r.r.'];
      cases.forEach(input => {
        expect(isInitial(input)).toBe(true);
      });
    });

    it('should identify academic titles', () => {
      const cases = ['Ph.D.', 'M.D.', 'Jr.', 'Sr.'];
      cases.forEach(input => {
        expect(isInitial(input)).toBe(true);
      });
    });

    it('should identify Roman numerals', () => {
      const cases = ['II', 'III', 'IV', 'V', 'VI'];
      cases.forEach(input => {
        expect(isInitial(input)).toBe(true);
      });
    });

    it('should reject regular words', () => {
      const cases = ['John', 'Smith', 'hello'];
      cases.forEach(input => {
        expect(isInitial(input)).toBe(false);
      });
    });

    it('should reject invalid patterns', () => {
      const cases = ['J', 'J.R', 'Ph.D'];
      cases.forEach(input => {
        expect(isInitial(input)).toBe(false);
      });
    });
  });

  describe('formatInitial', () => {
    it('should format academic titles correctly', () => {
      const cases = [
        ['ph.d.', 'Ph.D.'],
        ['PH.D.', 'Ph.D.'],
        ['m.d.', 'M.D.'],
        ['M.D.', 'M.D.'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatInitial(input)).toBe(expected);
      });
    });

    it('should format Jr/Sr correctly', () => {
      const cases = [
        ['jr.', 'Jr.'],
        ['JR.', 'Jr.'],
        ['sr.', 'Sr.'],
        ['SR.', 'Sr.'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatInitial(input)).toBe(expected);
      });
    });

    it('should format Roman numerals correctly', () => {
      const cases = [
        ['ii', 'II'],
        ['iii', 'III'],
        ['iv', 'IV'],
        ['v', 'V'],
        ['vi', 'VI'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatInitial(input)).toBe(expected);
      });
    });

    it('should format single initials correctly', () => {
      const cases = [
        ['j.', 'J.'],
        ['f.', 'F.'],
        ['K.', 'K.'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatInitial(input)).toBe(expected);
      });
    });

    it('should format multiple initials correctly', () => {
      const cases = [
        ['j.r.r.', 'J.R.R.'],
        ['a.b.c.', 'A.B.C.'],
        ['J.R.R.', 'J.R.R.'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatInitial(input)).toBe(expected);
      });
    });

    it('should handle mixed case initials', () => {
      const cases = [
        ['j.R.r.', 'J.R.R.'],
        ['A.b.C.', 'A.B.C.'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatInitial(input)).toBe(expected);
      });
    });
  });
});
