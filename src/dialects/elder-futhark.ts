import { transliterate } from "../transform";
import { getLetterMapping } from "./mappings/elder-futhark/letter-mapping";
import { getRuneMapping } from "./mappings/elder-futhark/rune-mapping";

/**
 * Convert Latin letters to Elder Futhark runes.
 * Characters not in the mapping pass through unchanged.
 */
export const lettersToRunes = (content: string): string => {
  const letterMapping = getLetterMapping();
  return transliterate(content, letterMapping);
};

/**
 * Convert Elder Futhark runes to Latin letters.
 * Runes not in the mapping pass through unchanged.
 */
export const runesToLetters = (content: string): string => {
  const runeMapping = getRuneMapping();
  return transliterate(content, runeMapping);
};

export default {
  getLetterMapping,
  getRuneMapping,
  lettersToRunes,
  runesToLetters,
};
