import { describe, it, expect } from 'vitest';
import {
  hasScottishPrefix,
  formatScottishName,
  hasWelshPatronymic,
  formatWelshPatronymic,
} from '../name-utils';

describe('name-utils', () => {
  describe('hasScottishPrefix', () => {
    const trueCases = ['McDonald', 'McLeod', 'mccarthy', 'MacLeod', 'MacDonald', 'macarthur'];
    const falseCases = ['Mc', 'Smith', 'Johnson', 'Martinez'];

    it.each(trueCases.map(input => [input]))('should identify %s as Scottish', input => {
      expect(hasScottishPrefix(input)).toBe(true);
    });

    it.each(falseCases.map(input => [input]))('should reject %s as non-Scottish', input => {
      expect(hasScottishPrefix(input)).toBe(false);
    });

    it('should allow Mac (3 chars)', () => {
      expect(hasScottishPrefix('Mac')).toBe(true);
    });
  });

  describe('formatScottishName', () => {
    const cases: Array<[string, string, string]> = [
      ['Mc lowercase', 'mcdonald', 'McDonald'],
      ['Mc caps', 'MCDONALD', 'McDonald'],
      ['McLeod', 'McLeod', 'McLeod'],
      ['Mc mixed', 'mccarthy', 'McCarthy'],
      ['Mac lowercase', 'macleod', 'MacLeod'],
      ['Mac caps', 'MACLEOD', 'MacLeod'],
      ['MacDonald', 'MacDonald', 'MacDonald'],
      ['Mac mixed', 'macarthur', 'MacArthur'],
      ['Mc weird case', 'mCdOnAlD', 'McDonald'],
      ['Mac weird case', 'mAcLeOd', 'MacLeod'],
      ['Non-Scottish 1', 'smith', 'Smith'],
      ['Non-Scottish 2', 'JOHNSON', 'Johnson'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatScottishName(input)).toBe(expected);
    });
  });

  describe('hasWelshPatronymic', () => {
    it('should identify Welsh patronymics correctly', () => {
      expect(hasWelshPatronymic('ap', 0, 2)).toBe(true);
      expect(hasWelshPatronymic('ab', 1, 3)).toBe(true);
    });

    it('should require word to not be at the end', () => {
      expect(hasWelshPatronymic('ap', 1, 2)).toBe(false);
      expect(hasWelshPatronymic('ab', 2, 3)).toBe(false);
    });

    const caseSensitiveCases = ['AP', 'Ab'];
    it.each(caseSensitiveCases.map(input => [input]))(
      'should handle %s case insensitive',
      input => {
        expect(hasWelshPatronymic(input, 0, 2)).toBe(true);
      }
    );
  });

  describe('formatWelshPatronymic', () => {
    const cases: Array<[string, string, string]> = [
      ['Patronymic AP', 'AP', 'ap'],
      ['Patronymic Ab', 'Ab', 'ab'],
      ['Patronymic FERCH', 'FERCH', 'ferch'],
      ['Non-patronymic david', 'david', 'David'],
      ['Non-patronymic RHYS', 'RHYS', 'Rhys'],
      ['Non-patronymic owen', 'owen', 'Owen'],
      ['Mixed case aPpRhYs', 'aPpRhYs', 'Apprhys'],
      ['Mixed case dAvId', 'dAvId', 'David'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatWelshPatronymic(input)).toBe(expected);
    });
  });
});
