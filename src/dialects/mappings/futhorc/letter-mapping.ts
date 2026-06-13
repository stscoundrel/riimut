let cachedLetterMapping: Map<string, string> | null = null;

export const getLetterMapping = (): Map<string, string> => {
  if (cachedLetterMapping) {
    return cachedLetterMapping;
  }

  cachedLetterMapping = new Map();

  cachedLetterMapping.set("a", "ᚪ");
  cachedLetterMapping.set("á", "ᚪ");
  cachedLetterMapping.set("b", "ᛒ");
  cachedLetterMapping.set("c", "ᚳ");
  cachedLetterMapping.set("d", "ᛞ");
  cachedLetterMapping.set("ð", "ᛞ");
  cachedLetterMapping.set("e", "ᛖ");
  cachedLetterMapping.set("é", "ᛖ");
  cachedLetterMapping.set("f", "ᚠ");
  cachedLetterMapping.set("g", "ᚷ");
  cachedLetterMapping.set("h", "ᚻ");
  cachedLetterMapping.set("i", "ᛁ");
  cachedLetterMapping.set("í", "ᛇ");
  cachedLetterMapping.set("ï", "ᛇ");
  cachedLetterMapping.set("ʒ", "ᛇ");
  cachedLetterMapping.set("j", "ᛡ");
  cachedLetterMapping.set("k", "ᚳ");
  cachedLetterMapping.set("l", "ᛚ");
  cachedLetterMapping.set("m", "ᛗ");
  cachedLetterMapping.set("n", "ᚾ");
  cachedLetterMapping.set("ŋ", "ᛝ");
  cachedLetterMapping.set("o", "ᚩ");
  cachedLetterMapping.set("ó", "ᚩ");
  cachedLetterMapping.set("p", "ᛈ");
  cachedLetterMapping.set("q", "ᚳ");
  cachedLetterMapping.set("r", "ᚱ");
  cachedLetterMapping.set("s", "ᛋ");
  cachedLetterMapping.set("t", "ᛏ");
  cachedLetterMapping.set("u", "ᚢ");
  cachedLetterMapping.set("ú", "ᚢ");
  cachedLetterMapping.set("v", "ᚹ");
  cachedLetterMapping.set("w", "ᚹ");
  cachedLetterMapping.set("x", "ᛉ");
  cachedLetterMapping.set("y", "ᚣ");
  cachedLetterMapping.set("ý", "ᚣ");
  cachedLetterMapping.set("z", "ᛉ");
  cachedLetterMapping.set("å", "ᚩ");
  cachedLetterMapping.set("ä", "ᚫ");
  cachedLetterMapping.set("æ", "ᚫ");
  cachedLetterMapping.set("œ", "ᛟ");
  cachedLetterMapping.set("ö", "ᛟ");
  cachedLetterMapping.set("ø", "ᛟ");
  cachedLetterMapping.set("þ", "ᚦ");
  cachedLetterMapping.set(" ", ":");

  return cachedLetterMapping;
};

export default {
  getLetterMapping,
};
