# Riimut

Transform latin letters to runes &amp; vice versa. TypeScript version.

Includes transformers for main runic alphabets:

- Elder Futhark
- Younger Futhark
- Staveless Futhark
- Medieval Futhork
- Futhorc (Anglo-Frisian runes)

### Install

`npm install riimut`

##### Usage

The package exports all dialect variants as their own thing.

```javascript
import { youngerFuthark, elderFuthark, medievalFuthork, stavelessFuthark, futhorc } from 'riimut'
```

You can either transform runes to text, or text to runes. All modules contain their own `lettersToRunes` and `runesToLetters` methods.


###### Younger Futhark

```javascript
import { youngerFuthark } from 'riimut'

// Old Norse text from Old Groms runestone.
const result = youngerFuthark.lettersToRunes('auk tani karþi kristna')

console.log(result) // ᛅᚢᚴ ᛏᛅᚾᛁ ᚴᛅᚱᚦᛁ ᚴᚱᛁᛋᛏᚾᛅ
```

```javascript
import { youngerFuthark } from 'riimut'

const result = youngerFuthark.runesToLetters('ᚠᚢᚦᛅᚱᚴ')

console.log(result) // fuþark
```

Style variants:

Younger Futhark contains two rune sets: long branch (danish) and short twig (Norwegian / Swedish)

```javascript
import { youngerFuthark } from from 'riimut'

const letters = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ";

// Comes with named functions per style.
const longBranch = youngerFuthark.lettersToLongBranchRunes(letters);
const shortTwig = youngerFuthark.lettersToShortTwigRunes(letters);

console.log(longBranch); // ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚦ
console.log(shortTwig);  // ᛆᛆᛒᛌᛐᚦᛁᛁᚠᚴᚽᛁᛁᛁᚴᛚᛘᚿᚢᚢᛒᚴᚱᛌᛐᚦᚢᚢᚢᚢᛌᚢᚢᛌᚢᛆᛆᚢᚢᚢᚦ

// Default function can also be called with variant enum to define the runeset.
const longBranchResult = youngerFuthark.lettersToRunes(letters, youngerFuthark.Variant.longBranch)
const shortTwigResult = youngerFuthark.lettersToRunes(letters, youngerFuthark.Variant.shortTwig)
```

###### Elder Futhark

Latin text to runes:

```javascript
import { elderFuthark } from 'riimut'

// Proto-norse text from 4th century axe in Jutland
const result = elderFuthark.lettersToRunes('wagagastiz alu wihgu sikijaz aiþalataz')

console.log(result) // ᚹᚨᚷᚨᚷᚨᛋᛏᛁᛉ:ᚨᛚᚢ:ᚹᛁᚻᚷᚢ:ᛋᛁᚲᛁᛃᚨᛉ:ᚨᛁᚦᚨᛚᚨᛏᚨᛉ
```

Runes to latin text:

```javascript
import { elderFuthark } from 'riimut'

const result = elderFuthark.runesToLetters('ᚠᚢᚦᚨᚱᚲ')

console.log(result) // fuþark
```

###### Staveless Futhark

Latin text to runes:

```typescript
import { stavelessFuthark } from 'riimut'

// From Hög runestone 12.
const result = stavelessFuthark.lettersToRunes('lit rita stin þina')

console.log(result) // ⸌ᛁ⸍:⡄ᛁ⸍⸝:╵⸍ᛁ⸜:וᛁ⸜⸝
```

Runes to latin text:

```typescript
import { stavelessFuthark } from 'riimut'

const result = stavelessFuthark.runesToLetters('⸌ᛁ⸍:⡄ᛁ⸍⸝:╵⸍ᛁ⸜:וᛁ⸜⸝')

console.log(result) // lit Rita stin þina
```

###### Medieval Futhork

Latin text to runes:

```javascript
import { medievalFuthork } from 'riimut'

const result = medievalFuthork.lettersToRunes('lorem ipsum dolor sit amet')

console.log(result) // "ᛚᚮᚱᛁᛘ:ᛁᛕᛋᚢᛘ:ᚦᚮᛚᚮᚱ:ᛋᛁᛏ:ᛆᛘᛁᛏ
```

Runes to latin text:

```javascript
import { medievalFuthork } from 'riimut'

const result = medievalFuthork.runesToLetters('ᛚᚮᚱᛁᛘ:ᛁᛕᛋᚢᛘ:ᚦᚮᛚᚮᚱ:ᛋᛁᛏ:ᛆᛘᛁᛏ')

console.log(result) // lorem ipsum dolor sit amet
```

###### Futhorc (Anglo-Frisian runes)

Latin text to runes:

```javascript
import { futhorc } from 'riimut'

// From 8th century Franks Casket, in late West Saxon.
const result = futhorc.lettersToRunes('fisc.flodu.ahofonferg | enberig |')

console.log(result) // ᚠᛁᛋᚳ.ᚠᛚᚩᛞᚢ.ᚪᚻᚩᚠᚩᚾᚠᛖᚱᚷ:|:ᛖᚾᛒᛖᚱᛁᚷ:|
```

Runes to latin text:

```javascript
import { futhorc } from 'riimut'

const result = futhorc.runesToLetters('ᚠᚢᚦᚩᚱᚳ')

console.log(result) // fuþorc
```

### About runes

The Elder Futhark, also known as the Older Futhark, is the oldest form of the runic alphabets. It was a writing system used by Germanic peoples for Northwest Germanic dialects in the Migration Period. It was used to write Proto-Norse language, predecessor of Old Norse.

The Younger Futhark, also called Scandinavian runes, is a runic alphabet and a reduced form of the Elder Futhark, with only 16 characters. It was in use from about the 9th century onwards.

Staveless Futkar runes were simplification of Younger Futhark, a runic alphabet of the viking age. In order to create the staveless runes, vertical marks (or staves) were dropped from individual runes.

The futhork, or the medieval runes, was a Scandinavian runic alphabet that evolved from the Younger Futhark at the end of the Viking Age. Used roughly from 12th to 17th centuries.

The Futhorc, also known as Anglo-Saxon runes, are runes used by the early Anglo-Saxons as an alphabet in their writing system. Based on Elder Futhark, they were in use from 5th through 11th centuries.
