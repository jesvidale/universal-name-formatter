import { describe, it, expect } from 'vitest';
import { isInitial, formatInitial } from '../initial-utils';

describe('initial-utils', () => {
  describe('isInitial', () => {
    const trueCases = [
      'J.',
      'F.',
      'k.',
      'J.R.R.',
      'A.B.C.',
      'j.r.r.',
      'Ph.D.',
      'M.D.',
      'Jr.',
      'Sr.',
      'II',
      'III',
      'IV',
      'V',
      'VI',
    ];
    const falseCases = ['John', 'Smith', 'hello', 'J', 'J.R', 'Ph.D'];

    it.each(trueCases.map(input => [input]))('should identify %s as initial', input => {
      expect(isInitial(input)).toBe(true);
    });

    it.each(falseCases.map(input => [input]))('should reject %s as non-initial', input => {
      expect(isInitial(input)).toBe(false);
    });
  });

  describe('formatInitial', () => {
    const cases: Array<[string, string, string]> = [
      ['Ph.D. lowercase', 'ph.d.', 'Ph.D.'],
      ['Ph.D. uppercase', 'PH.D.', 'Ph.D.'],
      ['M.D. lowercase', 'm.d.', 'M.D.'],
      ['M.D. uppercase', 'M.D.', 'M.D.'],
      ['Jr. lowercase', 'jr.', 'Jr.'],
      ['Jr. uppercase', 'JR.', 'Jr.'],
      ['Sr. lowercase', 'sr.', 'Sr.'],
      ['Sr. uppercase', 'SR.', 'Sr.'],
      ['Roman II', 'ii', 'II'],
      ['Roman III', 'iii', 'III'],
      ['Roman IV', 'iv', 'IV'],
      ['Roman V', 'v', 'V'],
      ['Roman VI', 'vi', 'VI'],
      ['Single initial j', 'j.', 'J.'],
      ['Single initial f', 'f.', 'F.'],
      ['Single initial K', 'K.', 'K.'],
      ['Multiple J.R.R.', 'j.r.r.', 'J.R.R.'],
      ['Multiple J.R.R. upper', 'J.R.R.', 'J.R.R.'],
      ['Multiple a.b.c.', 'a.b.c.', 'A.B.C.'],
      ['Single A.', 'a.', 'A.'],
      ['Custom X.Y.Z.', 'x.y.z.', 'X.Y.Z.'],
      ['Mixed case j.R.r.', 'j.R.r.', 'J.R.R.'],
      ['Mixed case A.b.C.', 'A.b.C.', 'A.B.C.'],
    ];

    it.each(cases)('%s: %s → %s', (_desc, input, expected) => {
      expect(formatInitial(input)).toBe(expected);
    });
  });
});
