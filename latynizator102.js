const transliterationMap102 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'É', 'е': 'é', 'Ё': 'Ó', 'ё': 'ó', 'Ж': 'Ž', 'ж': 'ž',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'H', 'х': 'h', 'Ц': 'C', 'ц': 'c',
    'Ч': 'Č', 'ч': 'č', 'Ш': 'Š', 'ш': 'š', 'Щ': 'Ś', 'щ': 'ś', 'Ъ': '', 'ъ': '',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'E', 'э': 'e', 'Ю': 'Ú', 'ю': 'ú',
    'Я': 'Á', 'я': 'á',
}

const firstLetterExceptions = {
    'Е': 'Je', 'е': 'je', 'Ё': 'Jo', 'ё': 'jo', 'Ю': 'Ju', 'ю': 'ju', 'Я': 'Ja', 'я': 'ja'
}

const afterVowelExceptions = {
    'е': 'je', 'ё': 'jo', 'ю': 'ju', 'я': 'ja', 'Е': 'Je', 'Ё': 'Jo', 'Ю': 'Ju', 'Я': 'Ja'
}

const vowels = ['а', 'э', 'и', 'о', 'у', 'ы', 'е', 'ё', 'ю', 'я', 'А', 'Э', 'И', 'О', 'У', 'Ы', 'Е', 'Ё', 'Ю', 'Я'];

function transliterateRussianToLatin102(input) {
    let output = '';
    const words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let char;
        if (firstLetterExceptions[word[0]]) {
            char = firstLetterExceptions[word[0]];
        } else {
            char = transliterationMap102[word[0]] || word[0];
        }
        for (let j = 1; j < word.length; j++) {
            const nextChar = word[j];
            if (vowels.includes(word[j - 1]) && afterVowelExceptions[nextChar]) {
                char += afterVowelExceptions[nextChar];
            } else {
                char += transliterationMap102[nextChar] || nextChar;
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
    return output;
}
