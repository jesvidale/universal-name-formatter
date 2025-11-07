import { describe, it, expect } from 'vitest';
import { capitalizeFirst, normalizeSpaces, preserveSpaces } from '../text-utils';

describe('text-utils', () => {
  describe('capitalizeFirst', () => {
    it('should capitalize the first letter of a word', () => {
      expect(capitalizeFirst('hello')).toBe('Hello');
      expect(capitalizeFirst('world')).toBe('World');
      expect(capitalizeFirst('test')).toBe('Test');
    });

    it('should handle already capitalized words', () => {
      expect(capitalizeFirst('Hello')).toBe('Hello');
      expect(capitalizeFirst('WORLD')).toBe('World');
    });

    it('should handle empty strings', () => {
      expect(capitalizeFirst('')).toBe('');
    });

    it('should handle single character strings', () => {
      expect(capitalizeFirst('a')).toBe('A');
      expect(capitalizeFirst('Z')).toBe('Z');
    });

    it('should handle special characters', () => {
      expect(capitalizeFirst('josé')).toBe('José');
      expect(capitalizeFirst('maría')).toBe('María');
    });

    it('should handle mixed case properly', () => {
      expect(capitalizeFirst('hELLo')).toBe('Hello');
      expect(capitalizeFirst('wOrLd')).toBe('World');
    });
  });

  describe('normalizeSpaces', () => {
    it('should replace multiple spaces with single space', () => {
      expect(normalizeSpaces('hello    world')).toBe('hello world');
      expect(normalizeSpaces('test   multiple    spaces')).toBe('test multiple spaces');
    });

    it('should handle tabs and newlines', () => {
      expect(normalizeSpaces('hello\t\tworld')).toBe('hello world');
      expect(normalizeSpaces('test\n\nlines')).toBe('test lines');
      expect(normalizeSpaces('mixed\t \n spaces')).toBe('mixed spaces');
    });

    it('should handle single spaces correctly', () => {
      expect(normalizeSpaces('hello world')).toBe('hello world');
      expect(normalizeSpaces('normal spacing')).toBe('normal spacing');
    });

    it('should handle empty strings', () => {
      expect(normalizeSpaces('')).toBe('');
    });
  });

  describe('preserveSpaces', () => {
    it('should extract leading spaces correctly', () => {
      const result = preserveSpaces('  hello world');
      expect(result.leading).toBe('  ');
      expect(result.content).toBe('hello world');
      expect(result.trailing).toBe('');
    });

    it('should extract trailing spaces correctly', () => {
      const result = preserveSpaces('hello world  ');
      expect(result.leading).toBe('');
      expect(result.content).toBe('hello world');
      expect(result.trailing).toBe('  ');
    });

    it('should extract both leading and trailing spaces', () => {
      const result = preserveSpaces('  hello world  ');
      expect(result.leading).toBe('  ');
      expect(result.content).toBe('hello world');
      expect(result.trailing).toBe('  ');
    });

    it('should handle strings with no extra spaces', () => {
      const result = preserveSpaces('hello world');
      expect(result.leading).toBe('');
      expect(result.content).toBe('hello world');
      expect(result.trailing).toBe('');
    });

    it('should handle empty strings', () => {
      const result = preserveSpaces('');
      expect(result.leading).toBe('');
      expect(result.content).toBe('');
      expect(result.trailing).toBe('');
    });
  });
});
