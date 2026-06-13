import transform from "../transform";
import { getLetterMapping } from "./mappings/elder-futhark/letter-mapping";
import { getRuneMapping } from "./mappings/elder-futhark/rune-mapping";

/**
 * Convert Latin letters to Elder Futhark runes.
 * Maps each character using the Elder Futhark letter-to-rune mapping.
 */
export const lettersToRunes = (content: string): string =>
  transform(content, getLetterMapping());

/**
 * Convert Elder Futhark runes back to Latin letters.
 * Maps each rune character using the Elder Futhark rune-to-letter mapping.
 */
export const runesToLetters = (content: string): string =>
  transform(content, getRuneMapping());

export default {
  getLetterMapping,
  getRuneMapping,
  lettersToRunes,
  runesToLetters,
};
