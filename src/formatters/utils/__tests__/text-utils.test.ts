import { describe, it, expect } from 'vitest';
import { capitalizeFirst, normalizeSpaces, preserveSpaces } from '../text-utils';

describe('text-utils', () => {
  describe('capitalizeFirst', () => {
    const cases: Array<[string, string, string]> = [
      ['basic lowercase', 'hello', 'Hello'],
      ['basic lowercase 2', 'world', 'World'],
      ['already capitalized', 'Hello', 'Hello'],
      ['all caps', 'WORLD', 'World'],
      ['empty string', '', ''],
      ['single char lowercase', 'a', 'A'],
      ['single char uppercase', 'Z', 'Z'],
      ['special char josé', 'josé', 'José'],
      ['special char maría', 'maría', 'María'],
      ['mixed case 1', 'hELLo', 'Hello'],
      ['mixed case 2', 'wOrLd', 'World'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(capitalizeFirst(input)).toBe(expected);
    });
  });

  describe('normalizeSpaces', () => {
    const cases: Array<[string, string, string]> = [
      ['multiple spaces', 'hello    world', 'hello world'],
      ['multiple spaces 2', 'test   multiple    spaces', 'test multiple spaces'],
      ['tabs', 'hello\t\tworld', 'hello world'],
      ['newlines', 'test\n\nlines', 'test lines'],
      ['mixed whitespace', 'mixed\t \n spaces', 'mixed spaces'],
      ['single spaces', 'hello world', 'hello world'],
      ['normal spacing', 'normal spacing', 'normal spacing'],
      ['empty string', '', ''],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(normalizeSpaces(input)).toBe(expected);
    });
  });

  describe('preserveSpaces', () => {
    const cases: Array<[string, string, { leading: string; trailing: string; content: string }]> = [
      ['leading spaces', '  hello world', { leading: '  ', content: 'hello world', trailing: '' }],
      ['trailing spaces', 'hello world  ', { leading: '', content: 'hello world', trailing: '  ' }],
      [
        'both leading and trailing',
        '  hello world  ',
        { leading: '  ', content: 'hello world', trailing: '  ' },
      ],
      ['no extra spaces', 'hello', { leading: '', content: 'hello', trailing: '' }],
      ['empty string', '', { leading: '', content: '', trailing: '' }],
    ];

    it.each(cases)('%s: %s', (_desc, input, expected) => {
      expect(preserveSpaces(input)).toEqual(expected);
    });
  });
});
