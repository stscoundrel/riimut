import { createMappingFromObject } from "../../../transform";

const RUNE_TO_LETTER: Record<string, string> = {
  "ᚠ": "f",
  "ᚢ": "u",
  "ᚦ": "þ",
  "ᚮ": "o",
  "ᚱ": "r",
  "ᚴ": "k",
  "ᚼ": "h",
  "ᚿ": "n",
  "ᛁ": "i",
  "ᛆ": "a",
  "ᛌ": "s",
  "ᛋ": "s",
  "ᛐ": "t",
  "ᛏ": "t",
  "ᛒ": "b",
  "ᛘ": "m",
  "ᛚ": "l",
  "ᛦ": "y",
  ":": " ",
  // Sting diacritic secondary sounds
  "ᚵ": "g",
  "ᚽ": "e",
  "ᚯ": "ø",
  "ᛅ": "æ",
  "ᚰ": "ǫ",
  "ᛕ": "ᴘ",
};

export const getRuneMapping = (): Map<string, string> =>
  createMappingFromObject(RUNE_TO_LETTER);

export default {
  getRuneMapping,
};
