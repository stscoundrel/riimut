let cachedLetterMapping: Map<string, string> | null = null;

export const getLetterMapping = (): Map<string, string> => {
  if (cachedLetterMapping) {
    return cachedLetterMapping;
  }

  cachedLetterMapping = new Map();

  cachedLetterMapping.set("a", "ᛆ");
  cachedLetterMapping.set("á", "ᛆ");
  cachedLetterMapping.set("b", "ᛒ");
  cachedLetterMapping.set("c", "ᚴ");
  cachedLetterMapping.set("d", "ᚦ");
  cachedLetterMapping.set("ð", "ᚦ");
  cachedLetterMapping.set("e", "ᚽ");
  cachedLetterMapping.set("é", "ᚽ");
  cachedLetterMapping.set("f", "ᚠ");
  cachedLetterMapping.set("g", "ᚵ");
  cachedLetterMapping.set("h", "ᚼ");
  cachedLetterMapping.set("i", "ᛁ");
  cachedLetterMapping.set("í", "ᛁ");
  cachedLetterMapping.set("j", "ᛁ");
  cachedLetterMapping.set("k", "ᚴ");
  cachedLetterMapping.set("l", "ᛚ");
  cachedLetterMapping.set("m", "ᛘ");
  cachedLetterMapping.set("n", "ᚿ");
  cachedLetterMapping.set("o", "ᚮ");
  cachedLetterMapping.set("ó", "ᚮ");
  cachedLetterMapping.set("ǫ", "ᚰ");
  cachedLetterMapping.set("p", "ᛕ");
  cachedLetterMapping.set("q", "ᚴ");
  cachedLetterMapping.set("r", "ᚱ");
  cachedLetterMapping.set("s", "ᛋ");
  cachedLetterMapping.set("t", "ᛏ");
  cachedLetterMapping.set("u", "ᚢ");
  cachedLetterMapping.set("ú", "ᚢ");
  cachedLetterMapping.set("ü", "ᚢ");
  cachedLetterMapping.set("v", "ᚠ");
  cachedLetterMapping.set("w", "ᚠ");
  cachedLetterMapping.set("x", "ᛋ");
  cachedLetterMapping.set("y", "ᛦ");
  cachedLetterMapping.set("ý", "ᛦ");
  cachedLetterMapping.set("z", "ᛋ");
  cachedLetterMapping.set("å", "ᚮ");
  cachedLetterMapping.set("ä", "ᛅ");
  cachedLetterMapping.set("æ", "ᛅ");
  cachedLetterMapping.set("œ", "ᚯ");
  cachedLetterMapping.set("ö", "ᚯ");
  cachedLetterMapping.set("ø", "ᚯ");
  cachedLetterMapping.set("þ", "ᚦ");
  cachedLetterMapping.set(" ", ":");

  return cachedLetterMapping;
};

export default {
  getLetterMapping,
};
