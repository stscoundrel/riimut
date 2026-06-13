import { createMappingFromObject } from "../../../transform";

const RUNE_TO_LETTER: Record<string, string> = {
  "ᚠ": "f",
  "ᚢ": "u",
  "ᚦ": "þ",
  "ᚬ": "o",
  "ᚱ": "r",
  "ᚴ": "k",
  "ᚼ": "h",
  "ᚽ": "h",
  "ᚾ": "n",
  "ᚿ": "n",
  "ᛁ": "i",
  "ᛅ": "a",
  "ᛆ": "a",
  "ᛋ": "s",
  "ᛌ": "s",
  "ᛏ": "t",
  "ᛐ": "t",
  "ᛒ": "b",
  "ᛘ": "m",
  "ᛚ": "l",
  "ᛦ": "R",
  ":": " ",
};

const LONG_BRANCH_RUNE_TO_LETTER: Record<string, string> = {
  "ᚠ": "f",
  "ᚢ": "u",
  "ᚦ": "þ",
  "ᚬ": "o",
  "ᚱ": "r",
  "ᚴ": "k",
  "ᚼ": "h",
  "ᚾ": "n",
  "ᛁ": "i",
  "ᛅ": "a",
  "ᛋ": "s",
  "ᛏ": "t",
  "ᛒ": "b",
  "ᛘ": "m",
  "ᛚ": "l",
  "ᛦ": "R",
  ":": " ",
};

const SHORT_TWIG_RUNE_TO_LETTER: Record<string, string> = {
  "ᚠ": "f",
  "ᚢ": "u",
  "ᚦ": "þ",
  "ᚬ": "o",
  "ᚱ": "r",
  "ᚴ": "k",
  "ᚽ": "h",
  "ᚿ": "n",
  "ᛁ": "i",
  "ᛆ": "a",
  "ᛌ": "s",
  "ᛏ": "t",
  "ᛐ": "t",
  "ᛒ": "b",
  "ᛘ": "m",
  "ᛚ": "l",
  "ᛦ": "R",
  ":": " ",
};

export const getRuneMapping = (): Map<string, string> =>
  createMappingFromObject(RUNE_TO_LETTER);

export const getLongBranchRuneMapping = (): Map<string, string> =>
  createMappingFromObject(LONG_BRANCH_RUNE_TO_LETTER);

export const getShortTwigRuneMapping = (): Map<string, string> =>
  createMappingFromObject(SHORT_TWIG_RUNE_TO_LETTER);

export default {
  getRuneMapping,
  getLongBranchRuneMapping,
  getShortTwigRuneMapping,
};
