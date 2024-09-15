import { describe, expect, test } from "bun:test";
import { youngerFuthark } from "../src";

describe("Younger Futhark", () => {
  describe("Letters to runes transformation tests", () => {
    test("Does not transform not-found characters", () => {
      const original = "12345";

      const result = youngerFuthark.lettersToRunes(original);

      expect(result).toBe(original);
    });

    test("Transforms letters to runes (default)", () => {
      const content = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæœöøǫþ";
      const expected = "ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚢᚦ";

      const result = youngerFuthark.lettersToRunes(content);

      expect(result).toBe(expected);
    });

    test("Transforms letters to runes (long branch)", () => {
      const content = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæœöøǫþ";
      const expected = "ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚢᚦ";

      const result = youngerFuthark.lettersToLongBranchRunes(content);

      expect(result).toBe(expected);
    });

    test("Transforms letters to runes (short twig)", () => {
      const content = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæœöøǫþ";
      const expected = "ᛆᛆᛒᛌᛐᚦᛁᛁᚠᚴᚽᛁᛁᛁᚴᛚᛘᚿᚢᚢᛒᚴᚱᛌᛐᚦᚢᚢᚢᚢᛌᚢᚢᛌᚢᛆᛆᚢᚢᚢᚢᚦ";

      const result = youngerFuthark.lettersToShortTwigRunes(content);

      expect(result).toBe(expected);
    });

    test("Transforms letters to runes with given variant", () => {
      const content = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæœöøǫþ";
      const expectedLongBranch = "ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚢᚦ";
      const expectedShortTwig = "ᛆᛆᛒᛌᛐᚦᛁᛁᚠᚴᚽᛁᛁᛁᚴᛚᛘᚿᚢᚢᛒᚴᚱᛌᛐᚦᚢᚢᚢᚢᛌᚢᚢᛌᚢᛆᛆᚢᚢᚢᚢᚦ";
      const longBranchResult = youngerFuthark.lettersToRunes(
        content,
        youngerFuthark.Variant.LongBranch,
      );
      const shortTwigResult = youngerFuthark.lettersToRunes(
        content,
        youngerFuthark.Variant.ShortTwig,
      );

      expect(longBranchResult).toBe(expectedLongBranch);
      expect(shortTwigResult).toBe(expectedShortTwig);
    });

    test("Transforms full sentence to runes", () => {
      // From Old Groms runestone.
      const letters = "auk tani karþi kristna";
      const expected = "ᛅᚢᚴ:ᛏᛅᚾᛁ:ᚴᛅᚱᚦᛁ:ᚴᚱᛁᛋᛏᚾᛅ";

      const result = youngerFuthark.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms upper & lowercase to same runes", () => {
      // From Old Groms runestone.
      const letters = "AUK tani Karþi kriSTnA";
      const expected = "ᛅᚢᚴ:ᛏᛅᚾᛁ:ᚴᛅᚱᚦᛁ:ᚴᚱᛁᛋᛏᚾᛅ";

      const result = youngerFuthark.lettersToRunes(letters);

      expect(result).toBe(expected);
    });

    test("Transforms accented letters", () => {
      const letters = "a e i o u y";
      const accentedLetters = "á é í ó ú ý";

      const result1 = youngerFuthark.lettersToRunes(letters);
      const result2 = youngerFuthark.lettersToRunes(accentedLetters);

      expect(result1).toEqual(result2);
    });

    test("Leaves non-matched letters unchanged.", () => {
      const expected = 'ᛅᚾᛏ:ᛚᚢ;:"ᚼᛁ":ᛋᛒᚢᚴᛁ:ᛁᚾ:ᚱᛁᛏᛏᛚᛁᛋ.';

      const result = youngerFuthark.lettersToRunes(
        'And lo; "he" spoke in riddles.',
      );

      expect(result).toEqual(expected);
    });

    test("Transforms ǫ (issue #53).", () => {
      const expected = "ᚢ";

      const result = youngerFuthark.lettersToRunes("ǫ");

      expect(result).toEqual(expected);
    });
  });

  describe("Rune mapping tests", () => {
    test("Main rune mapping is combination of short twig & long branch", () => {
      // Long branch & short twig runesets are offered as separate exports
      // While it would make sense to export the main rune map as combination of the two,
      // it would result in a bit of extra operations for each transform.
      // Lets trust the maps will remain in sync, and add this test to guard it.
      const runeMapping = youngerFuthark.getRuneMapping();
      const shortTwig = youngerFuthark.getShortTwigRuneMapping();
      const longBranch = youngerFuthark.getLongBranchRuneMapping();

      const combined = new Map([...longBranch, ...shortTwig]);

      expect(runeMapping).toEqual(combined);
    });
  });

  describe("Runes to letters transformation tests", () => {
    test("Transforms runes to letters", () => {
      const longBranchRunes = "ᚠᚢᚦᚬᚱᚴᚼᚽᚾᚿᛁᛅᛆᛋᛌᛏᛐᛒᛘᛚᛦ:";
      const shortTwigRunes = "ᚠᚢᚦᚬᚱᚴᚽᚽᚿᚿᛁᛆᛆᛌᛌᛐᛐᛒᛘᛚᛦ:";
      const expected = "fuþorkhhnniaassttbmlR ";

      // Both rune styles should produce same letters
      const result1 = youngerFuthark.runesToLetters(longBranchRunes);
      const result2 = youngerFuthark.runesToLetters(shortTwigRunes);

      expect(result1).toBe(expected);
      expect(result2).toBe(expected);
    });

    test("Transforms full rune sentence", () => {
      // From Old Groms runestone.
      const runes = "ᛅᚢᚴ ᛏᛅᚾᛁ ᚴᛅᚱᚦᛁ ᚴᚱᛁᛋᛏᚾᛅ";
      const expected = "auk tani karþi kristna";

      const result = youngerFuthark.runesToLetters(runes);

      expect(result).toBe(expected);
    });

    test("Transform alternative rune forms", () => {
      const runes = "ᚽᚿᛆᛌᛐ";
      const expected = "hnast";

      const result = youngerFuthark.runesToLetters(runes);

      expect(result).toBe(expected);
    });
  });
});
