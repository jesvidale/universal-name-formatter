/**
 * Utility functions for name formatting
 */

// Text manipulation utilities
export { capitalizeFirst, normalizeSpaces, preserveSpaces } from './text-utils';

// Initial and academic title utilities
export { isInitial, formatInitial } from './initial-utils';

// Name-specific utilities (Scottish, Welsh, etc.)
export {
  hasScottishPrefix,
  formatScottishName,
  hasWelshPatronymic,
  formatWelshPatronymic,
} from './name-utils';
