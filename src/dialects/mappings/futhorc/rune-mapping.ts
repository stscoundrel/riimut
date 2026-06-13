let cachedRuneMapping: Map<string, string> | null = null;

export const getRuneMapping = (): Map<string, string> => {
  if (cachedRuneMapping) {
    return cachedRuneMapping;
  }

  cachedRuneMapping = new Map();
  cachedRuneMapping.set("ᚠ", "f");
  cachedRuneMapping.set("ᚢ", "u");
  cachedRuneMapping.set("ᚦ", "þ");
  cachedRuneMapping.set("ᚩ", "o");
  cachedRuneMapping.set("ᚱ", "r");
  cachedRuneMapping.set("ᚳ", "c");
  cachedRuneMapping.set("ᚷ", "g");
  cachedRuneMapping.set("ᚹ", "w");
  cachedRuneMapping.set("ᚻ", "h");
  cachedRuneMapping.set("ᚾ", "n");
  cachedRuneMapping.set("ᛁ", "i");
  cachedRuneMapping.set("ᛡ", "j");
  cachedRuneMapping.set("ᛄ", "j");
  cachedRuneMapping.set("ᛇ", "ï");
  cachedRuneMapping.set("ᛈ", "p");
  cachedRuneMapping.set("ᛉ", "x");
  cachedRuneMapping.set("ᛋ", "s");
  cachedRuneMapping.set("ᚴ", "s");
  cachedRuneMapping.set("ᛏ", "t");
  cachedRuneMapping.set("ᛒ", "b");
  cachedRuneMapping.set("ᛖ", "e");
  cachedRuneMapping.set("ᛗ", "m");
  cachedRuneMapping.set("ᛚ", "l");
  cachedRuneMapping.set("ᛝ", "ŋ");
  cachedRuneMapping.set("ᛟ", "œ");
  cachedRuneMapping.set("ᛞ", "d");
  cachedRuneMapping.set("ᚪ", "a");
  cachedRuneMapping.set("ᚫ", "æ");
  cachedRuneMapping.set("ᚣ", "y");
  cachedRuneMapping.set("ᛠ", "ea");
  cachedRuneMapping.set(":", " ");
  return cachedRuneMapping;
};

export default {
  getRuneMapping,
};
