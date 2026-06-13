import {
  getRuneMapping,
  getLongBranchRuneMapping,
  getShortTwigRuneMapping,
} from "./mappings/younger-futhark/rune-mapping";
import {
  getLettersToLongBranchRunesMapping,
  getLettersToShortTwigRunesMapping,
} from "./mappings/younger-futhark/letter-mapping";
import { transliterate } from "../transform";

export enum Variant {
  LongBranch = "LONG_BRANCH",
  ShortTwig = "SHORTTWIG",
}

/**
 * Convert Latin letters to Younger Futhark Long Branch runes.
 */
export const lettersToLongBranchRunes = (content: string): string => {
  const letterMapping = getLettersToLongBranchRunesMapping();
  return transliterate(content, letterMapping);
};

/**
 * Convert Latin letters to Younger Futhark Short Twig runes.
 */
export const lettersToShortTwigRunes = (content: string): string => {
  const letterMapping = getLettersToShortTwigRunesMapping();
  return transliterate(content, letterMapping);
};

/**
 * Convert Latin letters to Younger Futhark runes.
 * Defaults to Long Branch variant; pass Variant.ShortTwig for Short Twig.
 */
export const lettersToRunes = (
  content: string,
  variant: Variant = Variant.LongBranch,
): string => {
  if (variant === Variant.ShortTwig) {
    return lettersToShortTwigRunes(content);
  }

  return lettersToLongBranchRunes(content);
};

/**
 * Convert Younger Futhark runes to Latin letters.
 */
export const runesToLetters = (content: string): string => {
  const runeMapping = getRuneMapping();
  return transliterate(content, runeMapping);
};

export default {
  lettersToRunes,
  runesToLetters,
  lettersToLongBranchRunes,
  lettersToShortTwigRunes,
  getRuneMapping,
  getLongBranchRuneMapping,
  getShortTwigRuneMapping,
  getLetterMapping: getLettersToLongBranchRunesMapping,
  getLettersToLongBranchRunesMapping,
  getLettersToShortTwigRunesMapping,
  Variant,
};
