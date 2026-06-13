import {
  getRuneMapping,
  getLongBranchRuneMapping,
  getShortTwigRuneMapping,
} from "./mappings/younger-futhark/rune-mapping";
import {
  getLettersToLongBranchRunesMapping,
  getLettersToShortTwigRunesMapping,
} from "./mappings/younger-futhark/letter-mapping";
import { transform } from "../transform";

export enum Variant {
  LongBranch = "LONG_BRANCH",
  ShortTwig = "SHORTTWIG",
}

/**
 * Convert Latin letters to Younger Futhark Long Branch runes.
 * This is the default variant used in Denmark and Sweden.
 */
export const lettersToLongBranchRunes = (content: string): string =>
  transform(content, getLettersToLongBranchRunesMapping());

/**
 * Convert Latin letters to Younger Futhark Short Twig runes.
 * This variant was used primarily in Norway.
 */
export const lettersToShortTwigRunes = (content: string): string =>
  transform(content, getLettersToShortTwigRunesMapping());

/**
 * Convert Latin letters to Younger Futhark runes with variant selection.
 * Defaults to Long Branch if no variant specified.
 */
export const lettersToRunes = (
  content: string,
  variant: Variant = Variant.LongBranch,
): string =>
  variant === Variant.ShortTwig
    ? lettersToShortTwigRunes(content)
    : lettersToLongBranchRunes(content);

/**
 * Convert Younger Futhark runes back to Latin letters.
 * Handles both Long Branch and Short Twig rune forms.
 */
export const runesToLetters = (content: string): string =>
  transform(content, getRuneMapping());

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
