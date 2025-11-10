import { describe, it, expect } from 'vitest';
import { capitalizeFirst, normalizeSpaces, preserveSpaces } from '../text-utils';

describe('text-utils', () => {
  describe('capitalizeFirst', () => {
    it('should capitalize the first letter of a word', () => {
      const cases = [
        ['hello', 'Hello'],
        ['world', 'World'],
        ['test', 'Test'],
      ];
      cases.forEach(([input, expected]) => {
        expect(capitalizeFirst(input)).toBe(expected);
      });
    });

    it('should handle already capitalized words', () => {
      const cases = [
        ['Hello', 'Hello'],
        ['WORLD', 'World'],
      ];
      cases.forEach(([input, expected]) => {
        expect(capitalizeFirst(input)).toBe(expected);
      });
    });

    it('should handle empty strings', () => {
      expect(capitalizeFirst('')).toBe('');
    });

    it('should handle single character strings', () => {
      const cases = [
        ['a', 'A'],
        ['Z', 'Z'],
      ];
      cases.forEach(([input, expected]) => {
        expect(capitalizeFirst(input)).toBe(expected);
      });
    });

    it('should handle special characters', () => {
      const cases = [
        ['josé', 'José'],
        ['maría', 'María'],
      ];
      cases.forEach(([input, expected]) => {
        expect(capitalizeFirst(input)).toBe(expected);
      });
    });

    it('should handle mixed case properly', () => {
      const cases = [
        ['hELLo', 'Hello'],
        ['wOrLd', 'World'],
      ];
      cases.forEach(([input, expected]) => {
        expect(capitalizeFirst(input)).toBe(expected);
      });
    });
  });

  describe('normalizeSpaces', () => {
    it('should replace multiple spaces with single space', () => {
      const cases = [
        ['hello    world', 'hello world'],
        ['test   multiple    spaces', 'test multiple spaces'],
      ];
      cases.forEach(([input, expected]) => {
        expect(normalizeSpaces(input)).toBe(expected);
      });
    });

    it('should handle tabs and newlines', () => {
      const cases = [
        ['hello\t\tworld', 'hello world'],
        ['test\n\nlines', 'test lines'],
        ['mixed\t \n spaces', 'mixed spaces'],
      ];
      cases.forEach(([input, expected]) => {
        expect(normalizeSpaces(input)).toBe(expected);
      });
    });

    it('should handle single spaces correctly', () => {
      const cases = [
        ['hello world', 'hello world'],
        ['normal spacing', 'normal spacing'],
      ];
      cases.forEach(([input, expected]) => {
        expect(normalizeSpaces(input)).toBe(expected);
      });
    });

    it('should handle empty strings', () => {
      expect(normalizeSpaces('')).toBe('');
    });
  });

  describe('preserveSpaces', () => {
    it('should extract leading spaces correctly', () => {
      const result = preserveSpaces('  hello world');
      expect(result).toEqual({
        leading: '  ',
        content: 'hello world',
        trailing: '',
      });
    });

    it('should extract trailing spaces correctly', () => {
      const result = preserveSpaces('hello world  ');
      expect(result).toEqual({
        leading: '',
        content: 'hello world',
        trailing: '  ',
      });
    });

    it('should extract both leading and trailing spaces', () => {
      const result = preserveSpaces('  hello world  ');
      expect(result).toEqual({
        leading: '  ',
        content: 'hello world',
        trailing: '  ',
      });
    });

    it('should handle strings with no extra spaces', () => {
      const result = preserveSpaces('hello world');
      expect(result).toEqual({
        leading: '',
        content: 'hello world',
        trailing: '',
      });
    });

    it('should handle empty strings', () => {
      const result = preserveSpaces('');
      expect(result).toEqual({
        leading: '',
        content: '',
        trailing: '',
      });
    });
  });
});
