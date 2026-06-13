import { transliterate } from "../transform";
import { getLetterMapping } from "./mappings/futhork/letter-mapping";
import { getRuneMapping } from "./mappings/futhork/rune-mapping";

/**
 * Convert Medieval Futhork runes to Latin letters.
 */
export const runesToLetters = (content: string): string => {
  const runeMapping = getRuneMapping();
  return transliterate(content, runeMapping);
};

/**
 * Convert Latin letters to Medieval Futhork runes.
 */
export const lettersToRunes = (content: string): string => {
  const letterMapping = getLetterMapping();
  return transliterate(content, letterMapping);
};

export default {
  runesToLetters,
  lettersToRunes,
  getRuneMapping,
  getLetterMapping,
};
