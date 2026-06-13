let cachedLetterMapping: Map<string, string> | null = null;

export const getLetterMapping = (): Map<string, string> => {
  if (cachedLetterMapping) {
    return cachedLetterMapping;
  }

  cachedLetterMapping = new Map();

  cachedLetterMapping.set("a", "ᚨ");
  cachedLetterMapping.set("á", "ᚨ");
  cachedLetterMapping.set("b", "ᛒ");
  cachedLetterMapping.set("c", "ᚲ");
  cachedLetterMapping.set("d", "ᛞ");
  cachedLetterMapping.set("ð", "ᚦ");
  cachedLetterMapping.set("e", "ᛖ");
  cachedLetterMapping.set("é", "ᛖ");
  cachedLetterMapping.set("f", "ᚠ");
  cachedLetterMapping.set("g", "ᚷ");
  cachedLetterMapping.set("h", "ᚻ");
  cachedLetterMapping.set("i", "ᛁ");
  cachedLetterMapping.set("í", "ᛁ");
  cachedLetterMapping.set("j", "ᛃ");
  cachedLetterMapping.set("k", "ᚲ");
  cachedLetterMapping.set("l", "ᛚ");
  cachedLetterMapping.set("m", "ᛗ");
  cachedLetterMapping.set("n", "ᚾ");
  cachedLetterMapping.set("ŋ", "ᛜ");
  cachedLetterMapping.set("o", "ᛟ");
  cachedLetterMapping.set("ó", "ᛟ");
  cachedLetterMapping.set("p", "ᛈ");
  cachedLetterMapping.set("q", "ᚲ");
  cachedLetterMapping.set("r", "ᚱ");
  cachedLetterMapping.set("s", "ᛋ");
  cachedLetterMapping.set("t", "ᛏ");
  cachedLetterMapping.set("u", "ᚢ");
  cachedLetterMapping.set("ú", "ᚢ");
  cachedLetterMapping.set("v", "ᚹ");
  cachedLetterMapping.set("w", "ᚹ");
  cachedLetterMapping.set("x", "ᛋ");
  cachedLetterMapping.set("y", "ᛁ");
  cachedLetterMapping.set("ý", "ᛁ");
  cachedLetterMapping.set("z", "ᛉ");
  cachedLetterMapping.set("å", "ᛟ");
  cachedLetterMapping.set("ä", "ᛇ");
  cachedLetterMapping.set("æ", "ᛇ");
  cachedLetterMapping.set("œ", "ᛟ");
  cachedLetterMapping.set("ö", "ᚢ");
  cachedLetterMapping.set("ø", "ᚢ");
  cachedLetterMapping.set("þ", "ᚦ");
  cachedLetterMapping.set(" ", ":");
  return cachedLetterMapping;
};

export default {
  getLetterMapping,
};
