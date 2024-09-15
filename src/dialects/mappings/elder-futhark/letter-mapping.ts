export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();

  letterMapping.set("a", "ᚨ");
  letterMapping.set("á", "ᚨ");
  letterMapping.set("b", "ᛒ");
  letterMapping.set("c", "ᚲ");
  letterMapping.set("d", "ᛞ");
  letterMapping.set("ð", "ᚦ");
  letterMapping.set("e", "ᛖ");
  letterMapping.set("é", "ᛖ");
  letterMapping.set("f", "ᚠ");
  letterMapping.set("g", "ᚷ");
  letterMapping.set("h", "ᚻ");
  letterMapping.set("i", "ᛁ");
  letterMapping.set("í", "ᛁ");
  letterMapping.set("j", "ᛃ");
  letterMapping.set("k", "ᚲ");
  letterMapping.set("l", "ᛚ");
  letterMapping.set("m", "ᛗ");
  letterMapping.set("n", "ᚾ");
  letterMapping.set("ŋ", "ᛜ");
  letterMapping.set("o", "ᛟ");
  letterMapping.set("ó", "ᛟ");
  letterMapping.set("p", "ᛈ");
  letterMapping.set("q", "ᚲ");
  letterMapping.set("r", "ᚱ");
  letterMapping.set("s", "ᛋ");
  letterMapping.set("t", "ᛏ");
  letterMapping.set("u", "ᚢ");
  letterMapping.set("ú", "ᚢ");
  letterMapping.set("v", "ᚹ");
  letterMapping.set("w", "ᚹ");
  letterMapping.set("x", "ᛋ");
  letterMapping.set("y", "ᛁ");
  letterMapping.set("ý", "ᛁ");
  letterMapping.set("z", "ᛉ");
  letterMapping.set("å", "ᛟ");
  letterMapping.set("ä", "ᛇ");
  letterMapping.set("æ", "ᛇ");
  letterMapping.set("œ", "ᛟ");
  letterMapping.set("ö", "ᚢ");
  letterMapping.set("ø", "ᚢ");
  letterMapping.set("þ", "ᚦ");
  letterMapping.set(" ", ":");
  return letterMapping;
};

export default {
  getLetterMapping,
};
