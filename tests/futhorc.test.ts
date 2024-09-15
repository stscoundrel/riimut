import { describe, test, expect } from "bun:test";
import { futhorc } from "../src";

describe("Futhorc", () => {
  describe("Letters to runes transformation tests", () => {
    test("Does not transform not-found characters", () => {
      const original = "12345";

      const result = futhorc.lettersToRunes(original);

      expect(result).toBe(original);
    });

    test("Transforms letters to runes", () => {
      const letters = "fuþorc";
      const expected = "ᚠᚢᚦᚩᚱᚳ";

      const result = futhorc.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms full sentence to runes", () => {
      // From 8th century Franks Casket, in late West Saxon.
      const letters = "fisc.flodu.ahofonferg | enberig |";
      const expected = "ᚠᛁᛋᚳ.ᚠᛚᚩᛞᚢ.ᚪᚻᚩᚠᚩᚾᚠᛖᚱᚷ:|:ᛖᚾᛒᛖᚱᛁᚷ:|";

      const result = futhorc.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms upper & lowercase to same runes", () => {
      // From 8th century Franks Casket, in late West Saxon.
      const letters = "FERGENBERIG";
      const expected = "ᚠᛖᚱᚷᛖᚾᛒᛖᚱᛁᚷ";

      const result = futhorc.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms accented letters", () => {
      const letters = "a e o u y";
      const accentedLetters = "á é ó ú ý";

      const result1 = futhorc.lettersToRunes(letters);
      const result2 = futhorc.lettersToRunes(accentedLetters);

      expect(result1).toEqual(result2);
    });
  });

  describe("Runes to letters transformation tests", () => {
    test("Transforms runes to letters", () => {
      const runes = "ᚠᚢᚦᚩᚱᚳ";
      const expected = "fuþorc";

      const result = futhorc.runesToLetters(runes);

      expect(result).toBe(expected);
    });

    test("Transforms full rune sentence", () => {
      // From 8th century Franks Casket, in late West Saxon.
      const runes = "ᚹᚪᚱᚦᚷᚪ:ᛋᚱᛁᚳᚷᚱᚩᚱᚾᚦᚫᚱᚻᛖᚩᚾᚷᚱᛖᚢᛏᚷᛁᛋᚹᚩᛗ:|:ᚻᚱᚩᚾᚫᛋᛒᚪᚾ";
      const expected = "warþga sricgrornþærheongreutgiswom | hronæsban";

      const result = futhorc.runesToLetters(runes);

      expect(result).toBe(expected);
    });
  });
});
