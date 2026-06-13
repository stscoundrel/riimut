let cachedRuneMapping: Map<string, string> | null = null;
let cachedLongBranchRuneMapping: Map<string, string> | null = null;
let cachedShortTwigRuneMapping: Map<string, string> | null = null;

export const getRuneMapping = (): Map<string, string> => {
  if (cachedRuneMapping) {
    return cachedRuneMapping;
  }

  cachedRuneMapping = new Map();
  cachedRuneMapping.set("ᚠ", "f");
  cachedRuneMapping.set("ᚢ", "u");
  cachedRuneMapping.set("ᚦ", "þ");
  cachedRuneMapping.set("ᚬ", "o");
  cachedRuneMapping.set("ᚱ", "r");
  cachedRuneMapping.set("ᚴ", "k");
  cachedRuneMapping.set("ᚼ", "h");
  cachedRuneMapping.set("ᚽ", "h");
  cachedRuneMapping.set("ᚾ", "n");
  cachedRuneMapping.set("ᚿ", "n");
  cachedRuneMapping.set("ᛁ", "i");
  cachedRuneMapping.set("ᛅ", "a");
  cachedRuneMapping.set("ᛆ", "a");
  cachedRuneMapping.set("ᛋ", "s");
  cachedRuneMapping.set("ᛌ", "s");
  cachedRuneMapping.set("ᛏ", "t");
  cachedRuneMapping.set("ᛐ", "t");
  cachedRuneMapping.set("ᛒ", "b");
  cachedRuneMapping.set("ᛘ", "m");
  cachedRuneMapping.set("ᛚ", "l");
  cachedRuneMapping.set("ᛦ", "R");
  cachedRuneMapping.set(":", " ");
  return cachedRuneMapping;
};

export const getLongBranchRuneMapping = (): Map<string, string> => {
  if (cachedLongBranchRuneMapping) {
    return cachedLongBranchRuneMapping;
  }

  cachedLongBranchRuneMapping = new Map();
  cachedLongBranchRuneMapping.set("ᚠ", "f");
  cachedLongBranchRuneMapping.set("ᚢ", "u");
  cachedLongBranchRuneMapping.set("ᚦ", "þ");
  cachedLongBranchRuneMapping.set("ᚬ", "o");
  cachedLongBranchRuneMapping.set("ᚱ", "r");
  cachedLongBranchRuneMapping.set("ᚴ", "k");
  cachedLongBranchRuneMapping.set("ᚼ", "h");
  cachedLongBranchRuneMapping.set("ᚾ", "n");
  cachedLongBranchRuneMapping.set("ᛁ", "i");
  cachedLongBranchRuneMapping.set("ᛅ", "a");
  cachedLongBranchRuneMapping.set("ᛋ", "s");
  cachedLongBranchRuneMapping.set("ᛏ", "t");
  cachedLongBranchRuneMapping.set("ᛒ", "b");
  cachedLongBranchRuneMapping.set("ᛘ", "m");
  cachedLongBranchRuneMapping.set("ᛚ", "l");
  cachedLongBranchRuneMapping.set("ᛦ", "R");
  cachedLongBranchRuneMapping.set(":", " ");
  return cachedLongBranchRuneMapping;
};

export const getShortTwigRuneMapping = (): Map<string, string> => {
  if (cachedShortTwigRuneMapping) {
    return cachedShortTwigRuneMapping;
  }

  cachedShortTwigRuneMapping = new Map();
  cachedShortTwigRuneMapping.set("ᚠ", "f");
  cachedShortTwigRuneMapping.set("ᚢ", "u");
  cachedShortTwigRuneMapping.set("ᚦ", "þ");
  cachedShortTwigRuneMapping.set("ᚬ", "o");
  cachedShortTwigRuneMapping.set("ᚱ", "r");
  cachedShortTwigRuneMapping.set("ᚴ", "k");
  cachedShortTwigRuneMapping.set("ᚽ", "h");
  cachedShortTwigRuneMapping.set("ᚿ", "n");
  cachedShortTwigRuneMapping.set("ᛁ", "i");
  cachedShortTwigRuneMapping.set("ᛆ", "a");
  cachedShortTwigRuneMapping.set("ᛌ", "s");
  cachedShortTwigRuneMapping.set("ᛏ", "t");
  cachedShortTwigRuneMapping.set("ᛐ", "t");
  cachedShortTwigRuneMapping.set("ᛒ", "b");
  cachedShortTwigRuneMapping.set("ᛘ", "m");
  cachedShortTwigRuneMapping.set("ᛚ", "l");
  cachedShortTwigRuneMapping.set("ᛦ", "R");
  cachedShortTwigRuneMapping.set(":", " ");
  return cachedShortTwigRuneMapping;
};

export default {
  getRuneMapping,
  getLongBranchRuneMapping,
  getShortTwigRuneMapping,
};
