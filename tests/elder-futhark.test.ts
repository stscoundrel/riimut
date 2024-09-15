import { describe, test, expect } from "bun:test";
import { elderFuthark } from "../src";

describe("Elder Futhark", () => {
  describe("Letters to runes transformation tests", () => {
    test("Does not transform not-found characters", () => {
      const original = "12345";

      const result = elderFuthark.lettersToRunes(original);

      expect(result).toBe(original);
    });

    test("Transforms letters to runes", () => {
      const content = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæœöøǫþ";
      const expected = "ᚨᚨᛒᚲᛞᚦᛖᛖᚠᚷᚻᛁᛁᛃᚲᛚᛗᚾᛟᛟᛈᚲᚱᛋᛏᚦᚢᚢᚹᚹᛋᛁᛁᛉᛟᛇᛇᛟᚢᚢǫᚦ";

      const result = elderFuthark.lettersToRunes(content);

      expect(result).toBe(expected);
    });

    test("Transforms full sentence to runes", () => {
      // From 4th century axe in Jutland
      const letters = "wagagastiz alu wihgu sikijaz aiþalataz";
      const expected = "ᚹᚨᚷᚨᚷᚨᛋᛏᛁᛉ:ᚨᛚᚢ:ᚹᛁᚻᚷᚢ:ᛋᛁᚲᛁᛃᚨᛉ:ᚨᛁᚦᚨᛚᚨᛏᚨᛉ";

      const result = elderFuthark.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms upper & lowercase to same runes", () => {
      // From 4th century axe in Jutland
      const letters = "WAGASGASTIZ"; // "wave-guest"
      const expected = "ᚹᚨᚷᚨᛋᚷᚨᛋᛏᛁᛉ";

      const result = elderFuthark.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms accented letters", () => {
      const letters = "a e i o u y";
      const accentedLetters = "á é í ó ú ý";

      const result1 = elderFuthark.lettersToRunes(letters);
      const result2 = elderFuthark.lettersToRunes(accentedLetters);

      expect(result1).toEqual(result2);
    });
  });

  describe("Runes to letters transformation tests", () => {
    test("Transforms runes to letters", () => {
      const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚻᚾᛁᛃᛇᛈᛉᛊᛋᛏᛒᛖᛗᛚᛜᛝᛟᛞ:";
      const expected = "fuþarkgwhhnijïpzsstbemlŋŋod ";

      const result = elderFuthark.runesToLetters(runes);

      expect(result).toBe(expected);
    });

    test("Transforms full rune sentence", () => {
      // From 4th century axe in Jutland
      const runes = "ᚹᚨᚷᚨᚷᚨᛋᛏᛁᛉ:ᚨᛚᚢ:ᚹᛁᚻᚷᚢ:ᛋᛁᚲᛁᛃᚨᛉ:ᚨᛁᚦᚨᛚᚨᛏᚨᛉ";
      const expected = "wagagastiz alu wihgu sikijaz aiþalataz";

      const result = elderFuthark.runesToLetters(runes);

      expect(result).toBe(expected);
    });
  });
});
