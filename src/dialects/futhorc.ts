import { transliterate } from "../transform";
import { getLetterMapping } from "./mappings/futhorc/letter-mapping";
import { getRuneMapping } from "./mappings/futhorc/rune-mapping";

/**
 * Convert Latin letters to Anglo-Saxon Futhorc runes.
 */
export const lettersToRunes = (content: string): string => {
  const letterMapping = getLetterMapping();
  return transliterate(content, letterMapping);
};

/**
 * Convert Anglo-Saxon Futhorc runes to Latin letters.
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
