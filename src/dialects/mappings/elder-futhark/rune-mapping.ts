export const getRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set("ᚠ", "f");
  runeMapping.set("ᚢ", "u");
  runeMapping.set("ᚦ", "þ");
  runeMapping.set("ᚨ", "a");
  runeMapping.set("ᚱ", "r");
  runeMapping.set("ᚲ", "k");
  runeMapping.set("ᚷ", "g");
  runeMapping.set("ᚹ", "w");
  runeMapping.set("ᚺ", "h");
  runeMapping.set("ᚻ", "h");
  runeMapping.set("ᚾ", "n");
  runeMapping.set("ᛁ", "i");
  runeMapping.set("ᛃ", "j");
  runeMapping.set("ᛇ", "ï");
  runeMapping.set("ᛈ", "p");
  runeMapping.set("ᛉ", "z");
  runeMapping.set("ᛊ", "s");
  runeMapping.set("ᛋ", "s");
  runeMapping.set("ᛏ", "t");
  runeMapping.set("ᛒ", "b");
  runeMapping.set("ᛖ", "e");
  runeMapping.set("ᛗ", "m");
  runeMapping.set("ᛚ", "l");
  runeMapping.set("ᛜ", "ŋ");
  runeMapping.set("ᛝ", "ŋ");
  runeMapping.set("ᛟ", "o");
  runeMapping.set("ᛞ", "d");
  runeMapping.set(":", " ");
  return runeMapping;
};

export default {
  getRuneMapping,
};
