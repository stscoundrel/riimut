let cachedRuneMapping: Map<string, string> | null = null;

export const getRuneMapping = (): Map<string, string> => {
  if (cachedRuneMapping) {
    return cachedRuneMapping;
  }

  cachedRuneMapping = new Map();
  cachedRuneMapping.set("ᚠ", "f");
  cachedRuneMapping.set("ᚢ", "u");
  cachedRuneMapping.set("ᚦ", "þ");
  cachedRuneMapping.set("ᚮ", "o");
  cachedRuneMapping.set("ᚱ", "r");
  cachedRuneMapping.set("ᚴ", "k");
  cachedRuneMapping.set("ᚼ", "h");
  cachedRuneMapping.set("ᚿ", "n");
  cachedRuneMapping.set("ᛁ", "i");
  cachedRuneMapping.set("ᛆ", "a");
  cachedRuneMapping.set("ᛌ", "s");
  cachedRuneMapping.set("ᛋ", "s");
  cachedRuneMapping.set("ᛐ", "t");
  cachedRuneMapping.set("ᛏ", "t");
  cachedRuneMapping.set("ᛒ", "b");
  cachedRuneMapping.set("ᛘ", "m");
  cachedRuneMapping.set("ᛚ", "l");
  cachedRuneMapping.set("ᛦ", "y");
  cachedRuneMapping.set(":", " ");

  // Sting diacritic secondary sounds.
  cachedRuneMapping.set("ᚵ", "g");
  cachedRuneMapping.set("ᚽ", "e");
  cachedRuneMapping.set("ᚯ", "ø");
  cachedRuneMapping.set("ᛅ", "æ");
  cachedRuneMapping.set("ᚰ", "ǫ");
  cachedRuneMapping.set("ᛕ", "ᴘ");
  return cachedRuneMapping;
};

export default {
  getRuneMapping,
};
