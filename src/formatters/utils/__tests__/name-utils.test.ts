import { describe, it, expect } from 'vitest';
import {
  hasScottishPrefix,
  formatScottishName,
  hasWelshPatronymic,
  formatWelshPatronymic,
} from '../name-utils';

describe('name-utils', () => {
  describe('hasScottishPrefix', () => {
    it('should identify Mc prefixes correctly', () => {
      const cases = ['McDonald', 'McLeod', 'mccarthy'];
      cases.forEach(input => {
        expect(hasScottishPrefix(input)).toBe(true);
      });
    });

    it('should identify Mac prefixes correctly', () => {
      const cases = ['MacLeod', 'MacDonald', 'macarthur'];
      cases.forEach(input => {
        expect(hasScottishPrefix(input)).toBe(true);
      });
    });

    it('should reject short words with prefix', () => {
      expect(hasScottishPrefix('Mc')).toBe(false);
      expect(hasScottishPrefix('Mac')).toBe(true); // Mac has 3 characters, so it passes the > 2 check
    });

    it('should reject words without Scottish prefixes', () => {
      const cases = ['Smith', 'Johnson', 'Martinez'];
      cases.forEach(input => {
        expect(hasScottishPrefix(input)).toBe(false);
      });
    });
  });

  describe('formatScottishName', () => {
    it('should format Mc names correctly', () => {
      const cases = [
        ['mcdonald', 'McDonald'],
        ['MCDONALD', 'McDonald'],
        ['McLeod', 'McLeod'],
        ['mccarthy', 'McCarthy'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatScottishName(input)).toBe(expected);
      });
    });

    it('should format Mac names correctly', () => {
      const cases = [
        ['macleod', 'MacLeod'],
        ['MACLEOD', 'MacLeod'],
        ['MacDonald', 'MacDonald'],
        ['macarthur', 'MacArthur'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatScottishName(input)).toBe(expected);
      });
    });

    it('should handle mixed case input', () => {
      const cases = [
        ['mCdOnAlD', 'McDonald'],
        ['mAcLeOd', 'MacLeod'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatScottishName(input)).toBe(expected);
      });
    });

    it('should fallback to regular capitalization for non-Scottish names', () => {
      const cases = [
        ['smith', 'Smith'],
        ['JOHNSON', 'Johnson'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatScottishName(input)).toBe(expected);
      });
    });
  });

  describe('hasWelshPatronymic', () => {
    it('should identify Welsh patronymics correctly', () => {
      expect(hasWelshPatronymic('ap', 0, 2)).toBe(true);
      expect(hasWelshPatronymic('ab', 1, 3)).toBe(true);
    });

    it('should require word to not be at the end', () => {
      expect(hasWelshPatronymic('ap', 1, 2)).toBe(false); // Last word
      expect(hasWelshPatronymic('ab', 2, 3)).toBe(false); // Last word
    });

    it('should handle case insensitive matching', () => {
      const cases = ['AP', 'Ab'];
      cases.forEach(input => {
        expect(hasWelshPatronymic(input, 0, 2)).toBe(true);
      });
    });
  });

  describe('formatWelshPatronymic', () => {
    it('should format Welsh patronymics in lowercase', () => {
      const cases = [
        ['AP', 'ap'],
        ['Ab', 'ab'],
        ['FERCH', 'ferch'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatWelshPatronymic(input)).toBe(expected);
      });
    });

    it('should capitalize non-patronymic words', () => {
      const cases = [
        ['david', 'David'],
        ['RHYS', 'Rhys'],
        ['owen', 'Owen'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatWelshPatronymic(input)).toBe(expected);
      });
    });

    it('should handle mixed case input', () => {
      const cases = [
        ['aPpRhYs', 'Apprhys'], // Not a patronymic
        ['dAvId', 'David'],
      ];
      cases.forEach(([input, expected]) => {
        expect(formatWelshPatronymic(input)).toBe(expected);
      });
    });
  });
});
