import transform from "../transform";
import { getLetterMapping } from "./mappings/futhorc/letter-mapping";
import { getRuneMapping } from "./mappings/futhorc/rune-mapping";

/**
 * Convert Latin letters to Anglo-Saxon Futhorc runes.
 * Maps each character using the Futhorc letter-to-rune mapping.
 */
export const lettersToRunes = (content: string): string =>
  transform(content, getLetterMapping());

/**
 * Convert Anglo-Saxon Futhorc runes back to Latin letters.
 * Maps each rune character using the Futhorc rune-to-letter mapping.
 */
export const runesToLetters = (content: string): string =>
  transform(content, getRuneMapping());

export default {
  getLetterMapping,
  getRuneMapping,
  lettersToRunes,
  runesToLetters,
};
