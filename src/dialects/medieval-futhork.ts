import transform from "../transform";
import { getLetterMapping } from "./mappings/futhork/letter-mapping";
import { getRuneMapping } from "./mappings/futhork/rune-mapping";

export const runesToLetters = (content: string): string => {
  const runeMapping = getRuneMapping();
  const result = transform(content, runeMapping);

  return result;
};

export const lettersToRunes = (content: string): string => {
  const letterMapping = getLetterMapping();
  const result = transform(content, letterMapping);

  return result;
};

export default {
  runesToLetters,
  lettersToRunes,
  getRuneMapping,
  getLetterMapping,
};
