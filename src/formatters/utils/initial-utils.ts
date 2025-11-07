export function isInitial(word: string): boolean {
  // Academic titles first
  if (/^(Ph\.D\.|M\.D\.|Jr\.|Sr\.|II|III|IV|V|VI)$/i.test(word)) return true;
  
  // Single initial: J., F. (exactly 2 characters)
  if (/^[a-z]\.$/i.test(word)) return true;
  
  // Multiple initials: 3 or more letters with optional final dot
  // j.r.r (valid), j.r.r. (valid), but J.R (invalid - only 2 letters)
  const letters = (word.match(/[a-z]/gi) || []).length;
  if (letters >= 3 && /^[a-z](\.[a-z])+\.?$/i.test(word)) return true;
  
  return false;
}

export function formatInitial(word: string): string {
  // Handle specific academic titles first
  if (/^ph\.d\.$/i.test(word)) return 'Ph.D.';
  if (/^m\.d\.$/i.test(word)) return 'M.D.';
  if (/^jr\.$/i.test(word)) return 'Jr.';
  if (/^sr\.$/i.test(word)) return 'Sr.';
  if (/^(II|III|IV|V|VI)$/i.test(word)) return word.toUpperCase();

  // Handle initials (J. -> J. or j.r.r -> J.R.R.)
  const letters = (word.match(/[a-z]/gi) || []).length;
  if (/^[a-z]\.$/i.test(word) || (letters >= 3 && /^[a-z](\.[a-z])+\.?$/i.test(word))) {
    let result = word.replace(/([a-z])/gi, match => match.toUpperCase());
    // Ensure it ends with a dot if it's multiple initials
    if (!result.endsWith('.') && result.includes('.')) {
      result += '.';
    }
    return result;
  }

  // Fallback for any other pattern
  return word.replace(/([a-z])/gi, match => match.toUpperCase());
}
