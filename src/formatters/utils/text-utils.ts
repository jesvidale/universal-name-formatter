export function capitalizeFirst(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, ' ');
}

export function preserveSpaces(text: string): {
  leading: string;
  trailing: string;
  content: string;
} {
  const leadingMatch = text.match(/^(\s*)/);
  const trailingMatch = text.match(/(\s*)$/);

  return {
    leading: leadingMatch ? leadingMatch[1] : '',
    trailing: trailingMatch ? trailingMatch[1] : '',
    content: text.trim(),
  };
}
