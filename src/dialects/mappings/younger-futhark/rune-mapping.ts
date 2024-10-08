export const getRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set("ᚠ", "f");
  runeMapping.set("ᚢ", "u");
  runeMapping.set("ᚦ", "þ");
  runeMapping.set("ᚬ", "o");
  runeMapping.set("ᚱ", "r");
  runeMapping.set("ᚴ", "k");
  runeMapping.set("ᚼ", "h");
  runeMapping.set("ᚽ", "h");
  runeMapping.set("ᚾ", "n");
  runeMapping.set("ᚿ", "n");
  runeMapping.set("ᛁ", "i");
  runeMapping.set("ᛅ", "a");
  runeMapping.set("ᛆ", "a");
  runeMapping.set("ᛋ", "s");
  runeMapping.set("ᛌ", "s");
  runeMapping.set("ᛏ", "t");
  runeMapping.set("ᛐ", "t");
  runeMapping.set("ᛒ", "b");
  runeMapping.set("ᛘ", "m");
  runeMapping.set("ᛚ", "l");
  runeMapping.set("ᛦ", "R");
  runeMapping.set(":", " ");
  return runeMapping;
};

export const getLongBranchRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set("ᚠ", "f");
  runeMapping.set("ᚢ", "u");
  runeMapping.set("ᚦ", "þ");
  runeMapping.set("ᚬ", "o");
  runeMapping.set("ᚱ", "r");
  runeMapping.set("ᚴ", "k");
  runeMapping.set("ᚼ", "h");
  runeMapping.set("ᚾ", "n");
  runeMapping.set("ᛁ", "i");
  runeMapping.set("ᛅ", "a");
  runeMapping.set("ᛋ", "s");
  runeMapping.set("ᛏ", "t");
  runeMapping.set("ᛒ", "b");
  runeMapping.set("ᛘ", "m");
  runeMapping.set("ᛚ", "l");
  runeMapping.set("ᛦ", "R");
  runeMapping.set(":", " ");
  return runeMapping;
};

export const getShortTwigRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set("ᚠ", "f");
  runeMapping.set("ᚢ", "u");
  runeMapping.set("ᚦ", "þ");
  runeMapping.set("ᚬ", "o");
  runeMapping.set("ᚱ", "r");
  runeMapping.set("ᚴ", "k");
  runeMapping.set("ᚽ", "h");
  runeMapping.set("ᚿ", "n");
  runeMapping.set("ᛁ", "i");
  runeMapping.set("ᛆ", "a");
  runeMapping.set("ᛌ", "s");
  runeMapping.set("ᛏ", "t");
  runeMapping.set("ᛐ", "t");
  runeMapping.set("ᛒ", "b");
  runeMapping.set("ᛘ", "m");
  runeMapping.set("ᛚ", "l");
  runeMapping.set("ᛦ", "R");
  runeMapping.set(":", " ");
  return runeMapping;
};

export default {
  getRuneMapping,
  getLongBranchRuneMapping,
  getShortTwigRuneMapping,
};
