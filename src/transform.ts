/**
 * Transliterate content by mapping each character through a dictionary.
 * Characters not found in the dictionary pass through unchanged.
 * Case-insensitive lookup: uppercase input characters are lowercased before lookup.
 */
export const transliterate = (
  content: string,
  dictionary: Map<string, string>,
): string => {
  let result = "";
  const parts: string[] = content.split("");

  for (const part of parts) {
    const partKey = part.toLocaleLowerCase();

    if (dictionary.has(partKey)) {
      result += dictionary.get(partKey);
    } else {
      result += part;
    }
  }

  return result;
};

/**
 * Create a Map from a plain object literal.
 * Provides a more readable alternative to repeated Map.set() calls.
 */
export const createMappingFromObject = (
  entries: Record<string, string>,
): Map<string, string> => {
  return new Map(Object.entries(entries));
};

// Backward-compatible alias
export const transform = transliterate;

export default transliterate;
