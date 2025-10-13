// const wordList = [
//     // Monophthongs
//   { word: 'c*a*t', sound: 'æ', position: 'middle' }, // short vowel, middle sound
//   { word: 'b*e*d', sound: 'e', position: 'middle' }, // short vowel, middle sound
//   { word: 'f*oo*t', sound: 'ʊ', position: 'middle' }, // short vowel, middle sound
//   { word: 't*oo*th', sound: 'u:', position: 'middle' }, // long vowel, middle sound
//   { word: 'b*ea*k', sound: 'i:', position: 'middle' }, // long vowel, middle sound
//   { word: 'c*a*ll', sound: 'ɔ:', position: 'middle' }, // long vowel, middle sound

//     // Diphthongs
//   { word: 'b*o*y', sound: 'ɔɪ', position: 'middle' }, // diphthong, middle sound
//   { word: 't*i*me', sound: 'aɪ', position: 'middle' }, // diphthong, middle sound
//   { word: 'j*u*ice', sound: 'u:', position: 'middle' }, // diphthong, middle sound
//   { word: 's*a*y', sound: 'eɪ', position: 'middle' }, // diphthong, middle sound
//   { word: 'cl*o*se', sound: 'əʊ', position: 'middle' }, // diphthong, middle sound
//   { word: 't*o*y', sound: 'ɔɪ', position: 'middle' }, // diphthong, middle sound
//   { word: 's*ou*nd', sound: 'aʊ', position: 'middle' }, // diphthong, middle sound

//     // Triphthongs
//   { word: 'f*ire*', sound: 'aɪə', position: 'middle' }, // triphthong, middle sound
//   { word: 'p*ower*', sound: 'aʊə', position: 'middle' }, // triphthong, middle sound

//     // Voiced consonants
//   { word: '*b*ag', sound: 'b', position: 'beginning' }, // voiced, beginning sound
//   { word: '*d*og', sound: 'd', position: 'beginning' }, // voiced, beginning sound
//   { word: '*g*ive', sound: 'g', position: 'beginning' }, // voiced, beginning sound
//   { word: '*j*am', sound: 'dʒ', position: 'beginning' }, // voiced, beginning sound
//   { word: 'da*b*', sound: 'b', position: 'end' }, // voiced, end sound
//   { word: 'car*d*', sound: 'd', position: 'end' }, // voiced, end sound

//     // Voiceless consonants
//   { word: '*p*an', sound: 'p', position: 'beginning' }, // voiceless, beginning sound
//   { word: '*t*en', sound: 't', position: 'beginning' }, // voiceless, beginning sound
//   { word: '*k*id', sound: 'k', position: 'beginning' }, // voiceless, beginning sound
//   { word: '*f*ar', sound: 'f', position: 'beginning' }, // voiceless, beginning sound
//   { word: 'sto*p*', sound: 'p', position: 'end' }, // voiceless, end sound
//   { word: 'ma*t*', sound: 't', position: 'end' }, // voiceless, end sound

//     // Mixed voiced and voiceless consonants
//   { word: '*z*oo', sound: 'z', position: 'beginning' }, // voiced, beginning sound
//   { word: '*sh*op', sound: 'ʃ', position: 'beginning' }, // voiceless, middle sound
//   { word: '*th*ick', sound: 'θ', position: 'middle' }, // voiceless, middle sound
//   { word: '*th*en', sound: 'ð', position: 'beginning' }, // voiced, middle sound
//   { word: 'wi*sh*', sound: 'ʃ', position: 'end' }, // voiceless, end sound
//   { word: 'ba*th*e', sound: 'ð', position: 'end' }, // voiced, end sound
//   ];

const wordList = [
  // Beginning Consonant Sounds
  { word: 'b*a*t', sound: 'æ', position: 'beginning' },
  { word: 'd*o*g', sound: 'ɒ', position: 'beginning' },
  { word: 'p*e*t', sound: 'e', position: 'beginning' },
  { word: 'c*u*p', sound: 'ʌ', position: 'beginning' },
  { word: 'f*i*t', sound: 'ɪ', position: 'beginning' },
  { word: 'g*o*t', sound: 'ɒ', position: 'beginning' },
  { word: 't*a*p', sound: 'æ', position: 'beginning' },
  { word: 'r*u*n', sound: 'ʌ', position: 'beginning' },
  { word: 's*i*t', sound: 'ɪ', position: 'beginning' },
  { word: 'h*e*n', sound: 'e', position: 'beginning' },
  { word: 'm*u*d', sound: 'ʌ', position: 'beginning' },
  { word: 'l*o*g', sound: 'ɒ', position: 'beginning' },
  { word: 'w*e*t', sound: 'e', position: 'beginning' },
  { word: 'k*i*t', sound: 'ɪ', position: 'beginning' },
  { word: 'z*o*g', sound: 'ɒ', position: 'beginning' },
  { word: 'j*a*m', sound: 'æ', position: 'beginning' },
  { word: 'n*u*t', sound: 'ʌ', position: 'beginning' },
  { word: 'b*e*d', sound: 'e', position: 'beginning' },
  { word: 'v*a*n', sound: 'æ', position: 'beginning' },
  { word: 'p*o*t', sound: 'ɒ', position: 'beginning' },

  // Ending Consonant Sounds
  { word: 'ca*p*', sound: 'æ', position: 'end' },
  { word: 'bu*d*', sound: 'ʌ', position: 'end' },
  { word: 'hi*t*', sound: 'ɪ', position: 'end' },
  { word: 'ru*n*', sound: 'ʌ', position: 'end' },
  { word: 'fi*x*', sound: 'ɪ', position: 'end' },
  { word: 'lo*g*', sound: 'ɒ', position: 'end' },
  { word: 'ma*t*', sound: 'æ', position: 'end' },
  { word: 'cu*t*', sound: 'ʌ', position: 'end' },
  { word: 'si*t*', sound: 'ɪ', position: 'end' },
  { word: 'be*d*', sound: 'e', position: 'end' },
  { word: 'du*g*', sound: 'ʌ', position: 'end' },
  { word: 'to*p*', sound: 'ɒ', position: 'end' },
  { word: 'va*n*', sound: 'æ', position: 'end' },
  { word: 'ki*t*', sound: 'ɪ', position: 'end' },
  { word: 'hu*g*', sound: 'ʌ', position: 'end' },
  { word: 'bo*t*', sound: 'ɒ', position: 'end' },
  { word: 'fe*d*', sound: 'e', position: 'end' },
  { word: 'ja*m*', sound: 'æ', position: 'end' },
  { word: 'pi*n*', sound: 'ɪ', position: 'end' },
  { word: 'su*n*', sound: 'ʌ', position: 'end' },
  { word: 'zo*g*', sound: 'ɒ', position: 'end' },
  { word: 're*d*', sound: 'e', position: 'end' },
  { word: 'vi*n*', sound: 'ɪ', position: 'end' },
  { word: 'lu*g*', sound: 'ʌ', position: 'end' },
  { word: 'je*t*', sound: 'e', position: 'end' },
  { word: 'mi*x*', sound: 'ɪ', position: 'end' },
  { word: 'ro*t*', sound: 'ɒ', position: 'end' }
];