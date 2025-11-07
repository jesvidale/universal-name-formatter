import { getLanguageConfig } from '../../config/languages';
import { type SupportedLocale } from '../../config/types';
import { capitalizeFirst } from './text-utils';

export function hasScottishPrefix(word: string): boolean {
  return /^(mc|mac)/i.test(word) && word.length > 2;
}

export function formatScottishName(word: string): string {
  const lowerWord = word.toLowerCase();
  if (lowerWord.startsWith('mc')) {
    return 'Mc' + capitalizeFirst(word.substring(2));
  }
  if (lowerWord.startsWith('mac')) {
    return 'Mac' + capitalizeFirst(word.substring(3));
  }
  return capitalizeFirst(word);
}

export function hasWelshPatronymic(word: string, index: number, totalWords: number): boolean {
  const welshConfig = getLanguageConfig('cy' as SupportedLocale);
  return Boolean(index < totalWords - 1 && welshConfig?.prepositions.includes(word.toLowerCase()));
}

export function formatWelshPatronymic(word: string): string {
  const welshConfig = getLanguageConfig('cy' as SupportedLocale);
  return welshConfig?.prepositions.includes(word.toLowerCase())
    ? word.toLowerCase()
    : capitalizeFirst(word);
}
