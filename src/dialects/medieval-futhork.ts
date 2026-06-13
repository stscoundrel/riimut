import transform from "../transform";
import { getLetterMapping } from "./mappings/futhork/letter-mapping";
import { getRuneMapping } from "./mappings/futhork/rune-mapping";

/**
 * Convert Medieval Futhork runes back to Latin letters.
 * Maps each rune character using the Futhork rune-to-letter mapping.
 */
export const runesToLetters = (content: string): string =>
  transform(content, getRuneMapping());

/**
 * Convert Latin letters to Medieval Futhork runes.
 * Maps each character using the Futhork letter-to-rune mapping.
 */
export const lettersToRunes = (content: string): string =>
  transform(content, getLetterMapping());

export default {
  runesToLetters,
  lettersToRunes,
  getRuneMapping,
  getLetterMapping,
};
