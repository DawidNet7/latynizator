// Code fix by: nameless_from_poland (Discord)

const transliterationMap104 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'Ie', 'е': 'ie', 'Ё': 'Io', 'ё': 'io', 'Ж': 'Ž', 'ж': 'ž',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'H', 'х': 'h', 'Ц': 'C', 'ц': 'c',
    'Ч': 'Č', 'ч': 'č', 'Ш': 'Š', 'ш': 'š', 'Щ': 'Ś', 'щ': 'ś', 'Ъ': '', 'ъ': '',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'E', 'э': 'e', 'Ю': 'Iu', 'ю': 'iu',
    'Я': 'Ia', 'я': 'ia', ',': ',', '-': '-'
};

const firstLetterExceptions_fix = {
    'Е': 'Je', 'е': 'je', 'Ё': 'Jo', 'ё': 'jo', 'Ю': 'Ju', 'ю': 'ju', 'Я': 'Ja', 'я': 'ja', ',': ',', '-': '-'
};

const afterVowelExceptions_fix = {
    'е': 'je', 'ё': 'jo', 'ю': 'ju', 'я': 'ja', 'Е': 'Je', 'Ё': 'Jo', 'Ю': 'Ju', 'Я': 'Ja', ',': ',', '-': '-'
};

const vowels_fix = ['а', 'э', 'и', 'о', 'у', 'ы', 'е', 'ё', 'ю', 'я', 'А', 'Э', 'И', 'О', 'У', 'Ы', 'Е', 'Ё', 'Ю', 'Я'];

function transliterateRussianToLatin104(input) {
    let output = '';
const sentences = input.split("\n");
    for (let k = 0; k < sentences.length; k++) {
const words = sentences[k].split(' ');
for (let i = 0; i < words.length; i++) {
const word = words[i];
if (word.length == 0) {
output += ' '
continue;
}
let char = transliterationMap104[word[0]] || word[0]
if (firstLetterExceptions_fix[word[0]]) {
char = firstLetterExceptions_fix[word[0]];
}
for (let j = 1; j < word.length; j++) {
const nextChar = word[j];
if (vowels_fix.includes(word[j - 1]) && afterVowelExceptions_fix[nextChar]) {
char += afterVowelExceptions_fix[nextChar];
} else {
char += transliterationMap104[nextChar] || nextChar;
}
}
if (word.length > 1 && word === word.toUpperCase()) {
char = char.toUpperCase();
}
output += char;
if (i < words.length - 1) {
output += ' ';
}
}
output += "\n";
}
    return output;
}