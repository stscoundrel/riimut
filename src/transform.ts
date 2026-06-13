/**
 * Transforms content string by replacing each character using a dictionary mapping.
 * Characters are lowercased before lookup. Unmapped characters pass through unchanged.
 *
 * @param content - The input string to transform
 * @param dictionary - A Map from source characters to replacement characters
 * @returns The transformed string
 */
export const transform = (
  content: string,
  dictionary: Map<string, string>,
): string => {
  return content
    .split("")
    .map((char) => {
      const key = char.toLocaleLowerCase();
      return dictionary.has(key) ? dictionary.get(key)! : char;
    })
    .join("");
};

export default transform;
