import { describe, test, expect } from "bun:test";
import { medievalFuthork as futhork } from "../src";

describe("Medieval Futhork", () => {
  describe("Letters to runes transformation tests", () => {
    test("Transforms letters to runes", () => {
      const commonLetters = "aábcdðeéfghiíjklmnoóǫpqrstuúvwxyýzåäæœöøþ";
      const expected = "ᛆᛆᛒᚴᚦᚦᚽᚽᚠᚵᚼᛁᛁᛁᚴᛚᛘᚿᚮᚮᚰᛕᚴᚱᛋᛏᚢᚢᚠᚠᛋᛦᛦᛋᚮᛅᛅᚯᚯᚯᚦ";

      const result = futhork.lettersToRunes(commonLetters);

      expect(result).toBe(expected);
    });

    test("Transforms full sentence", () => {
      // From Lord's Prayer.
      const content = "Faðer uor som ast i himlüm, halgað warðe þit nama";
      const expected = "ᚠᛆᚦᚽᚱ:ᚢᚮᚱ:ᛋᚮᛘ:ᛆᛋᛏ:ᛁ:ᚼᛁᛘᛚᚢᛘ,:ᚼᛆᛚᚵᛆᚦ:ᚠᛆᚱᚦᚽ:ᚦᛁᛏ:ᚿᛆᛘᛆ";

      const result = futhork.lettersToRunes(content);

      expect(result).toBe(expected);
    });
  });

  describe("Runes to letters transformation tests", () => {
    test("Transforms runes to letters", () => {
      const runes = "ᚠᚢᚦᚮᚱᚴᚼᚿᛁᛆᛌᛋᛐᛏᛒᛘᛚᛦᚯᛅᚰᛕᚽᚵ:";
      const expected = "fuþorkhniassttbmlyøæǫᴘeg ";

      const result = futhork.runesToLetters(runes);

      expect(result).toBe(expected);
    });

    test("Does not transform non-matched characters", () => {
      const notRunes = "12345-6789";
      const result = futhork.runesToLetters(notRunes);

      expect(result).toBe(notRunes);
    });
  });
});
