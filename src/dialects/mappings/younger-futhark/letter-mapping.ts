let cachedLongBranchMapping: Map<string, string> | null = null;
let cachedShortTwigMapping: Map<string, string> | null = null;

export const getLettersToLongBranchRunesMapping = (): Map<string, string> => {
  if (cachedLongBranchMapping) {
    return cachedLongBranchMapping;
  }

  cachedLongBranchMapping = new Map();
  cachedLongBranchMapping.set("a", "ᛅ");
  cachedLongBranchMapping.set("á", "ᛅ");
  cachedLongBranchMapping.set("b", "ᛒ");
  cachedLongBranchMapping.set("c", "ᛋ");
  cachedLongBranchMapping.set("d", "ᛏ");
  cachedLongBranchMapping.set("ð", "ᚦ");
  cachedLongBranchMapping.set("e", "ᛁ");
  cachedLongBranchMapping.set("é", "ᛁ");
  cachedLongBranchMapping.set("f", "ᚠ");
  cachedLongBranchMapping.set("g", "ᚴ");
  cachedLongBranchMapping.set("h", "ᚼ");
  cachedLongBranchMapping.set("i", "ᛁ");
  cachedLongBranchMapping.set("í", "ᛁ");
  cachedLongBranchMapping.set("j", "ᛁ");
  cachedLongBranchMapping.set("k", "ᚴ");
  cachedLongBranchMapping.set("l", "ᛚ");
  cachedLongBranchMapping.set("m", "ᛘ");
  cachedLongBranchMapping.set("n", "ᚾ");
  cachedLongBranchMapping.set("o", "ᚢ");
  cachedLongBranchMapping.set("ó", "ᚢ");
  cachedLongBranchMapping.set("p", "ᛒ");
  cachedLongBranchMapping.set("q", "ᚴ");
  cachedLongBranchMapping.set("r", "ᚱ");
  cachedLongBranchMapping.set("s", "ᛋ");
  cachedLongBranchMapping.set("t", "ᛏ");
  cachedLongBranchMapping.set("þ", "ᚦ");
  cachedLongBranchMapping.set("u", "ᚢ");
  cachedLongBranchMapping.set("ú", "ᚢ");
  cachedLongBranchMapping.set("v", "ᚢ");
  cachedLongBranchMapping.set("w", "ᚢ");
  cachedLongBranchMapping.set("x", "ᛋ");
  cachedLongBranchMapping.set("y", "ᚢ");
  cachedLongBranchMapping.set("ý", "ᚢ");
  cachedLongBranchMapping.set("z", "ᛋ");
  cachedLongBranchMapping.set("å", "ᚢ");
  cachedLongBranchMapping.set("ä", "ᛅ");
  cachedLongBranchMapping.set("æ", "ᛅ");
  cachedLongBranchMapping.set("œ", "ᚢ");
  cachedLongBranchMapping.set("ö", "ᚢ");
  cachedLongBranchMapping.set("ø", "ᚢ");
  cachedLongBranchMapping.set("ǫ", "ᚢ");
  cachedLongBranchMapping.set(" ", ":");
  return cachedLongBranchMapping;
};

export const getLettersToShortTwigRunesMapping = (): Map<string, string> => {
  if (cachedShortTwigMapping) {
    return cachedShortTwigMapping;
  }

  cachedShortTwigMapping = new Map();
  cachedShortTwigMapping.set("a", "ᛆ");
  cachedShortTwigMapping.set("á", "ᛆ");
  cachedShortTwigMapping.set("b", "ᛒ");
  cachedShortTwigMapping.set("c", "ᛌ");
  cachedShortTwigMapping.set("d", "ᛐ");
  cachedShortTwigMapping.set("ð", "ᚦ");
  cachedShortTwigMapping.set("e", "ᛁ");
  cachedShortTwigMapping.set("é", "ᛁ");
  cachedShortTwigMapping.set("f", "ᚠ");
  cachedShortTwigMapping.set("g", "ᚴ");
  cachedShortTwigMapping.set("h", "ᚽ");
  cachedShortTwigMapping.set("i", "ᛁ");
  cachedShortTwigMapping.set("í", "ᛁ");
  cachedShortTwigMapping.set("j", "ᛁ");
  cachedShortTwigMapping.set("k", "ᚴ");
  cachedShortTwigMapping.set("l", "ᛚ");
  cachedShortTwigMapping.set("m", "ᛘ");
  cachedShortTwigMapping.set("n", "ᚿ");
  cachedShortTwigMapping.set("o", "ᚢ");
  cachedShortTwigMapping.set("ó", "ᚢ");
  cachedShortTwigMapping.set("p", "ᛒ");
  cachedShortTwigMapping.set("q", "ᚴ");
  cachedShortTwigMapping.set("r", "ᚱ");
  cachedShortTwigMapping.set("s", "ᛌ");
  cachedShortTwigMapping.set("t", "ᛐ");
  cachedShortTwigMapping.set("þ", "ᚦ");
  cachedShortTwigMapping.set("u", "ᚢ");
  cachedShortTwigMapping.set("ú", "ᚢ");
  cachedShortTwigMapping.set("v", "ᚢ");
  cachedShortTwigMapping.set("w", "ᚢ");
  cachedShortTwigMapping.set("x", "ᛌ");
  cachedShortTwigMapping.set("y", "ᚢ");
  cachedShortTwigMapping.set("ý", "ᚢ");
  cachedShortTwigMapping.set("z", "ᛌ");
  cachedShortTwigMapping.set("å", "ᚢ");
  cachedShortTwigMapping.set("ä", "ᛆ");
  cachedShortTwigMapping.set("æ", "ᛆ");
  cachedShortTwigMapping.set("œ", "ᚢ");
  cachedShortTwigMapping.set("ö", "ᚢ");
  cachedShortTwigMapping.set("ø", "ᚢ");
  cachedShortTwigMapping.set("ǫ", "ᚢ");
  cachedShortTwigMapping.set(" ", ":");
  return cachedShortTwigMapping;
};

export default {
  getLettersToLongBranchRunesMapping,
  getLettersToShortTwigRunesMapping,
};
