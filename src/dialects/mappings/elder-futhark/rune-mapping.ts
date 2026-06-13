let cachedRuneMapping: Map<string, string> | null = null;

export const getRuneMapping = (): Map<string, string> => {
  if (cachedRuneMapping) {
    return cachedRuneMapping;
  }

  cachedRuneMapping = new Map();
  cachedRuneMapping.set("ᚠ", "f");
  cachedRuneMapping.set("ᚢ", "u");
  cachedRuneMapping.set("ᚦ", "þ");
  cachedRuneMapping.set("ᚨ", "a");
  cachedRuneMapping.set("ᚱ", "r");
  cachedRuneMapping.set("ᚲ", "k");
  cachedRuneMapping.set("ᚷ", "g");
  cachedRuneMapping.set("ᚹ", "w");
  cachedRuneMapping.set("ᚺ", "h");
  cachedRuneMapping.set("ᚻ", "h");
  cachedRuneMapping.set("ᚾ", "n");
  cachedRuneMapping.set("ᛁ", "i");
  cachedRuneMapping.set("ᛃ", "j");
  cachedRuneMapping.set("ᛇ", "ï");
  cachedRuneMapping.set("ᛈ", "p");
  cachedRuneMapping.set("ᛉ", "z");
  cachedRuneMapping.set("ᛊ", "s");
  cachedRuneMapping.set("ᛋ", "s");
  cachedRuneMapping.set("ᛏ", "t");
  cachedRuneMapping.set("ᛒ", "b");
  cachedRuneMapping.set("ᛖ", "e");
  cachedRuneMapping.set("ᛗ", "m");
  cachedRuneMapping.set("ᛚ", "l");
  cachedRuneMapping.set("ᛜ", "ŋ");
  cachedRuneMapping.set("ᛝ", "ŋ");
  cachedRuneMapping.set("ᛟ", "o");
  cachedRuneMapping.set("ᛞ", "d");
  cachedRuneMapping.set(":", " ");
  return cachedRuneMapping;
};

export default {
  getRuneMapping,
};
