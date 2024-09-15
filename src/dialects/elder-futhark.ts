import transform from "../transform";
import { getLetterMapping } from "./mappings/elder-futhark/letter-mapping";
import { getRuneMapping } from "./mappings/elder-futhark/rune-mapping";

export const lettersToRunes = (content: string): string => {
  const letterMapping = getLetterMapping();
  const result = transform(content, letterMapping);

  return result;
};

export const runesToLetters = (content: string): string => {
  const runeMapping = getRuneMapping();
  const result = transform(content, runeMapping);

  return result;
};

export default {
  getLetterMapping,
  getRuneMapping,
  lettersToRunes,
  runesToLetters,
};
