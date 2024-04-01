const transliterationMap4 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'W', 'в': 'W', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'Ie', 'е': 'ie', 'Ё': 'Io', 'ё': 'io', 'Ж': 'Ż', 'ж': 'ż',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'Ch', 'х': 'ch', 'Ц': 'C', 'ц': 'c',
    'Ч': 'Cz', 'ч': 'cz', 'Ш': 'Sz', 'ш': 'sz', 'Щ': 'Szcz', 'щ': 'szcz', 'Ъ': '', 'ъ': '',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'E', 'э': 'e', 'Ю': 'Iu', 'ю': 'iu',
    'Я': 'Ia', 'я': 'ia',
};

function transliterateRussianToLatin4(input) {
    let output = '';
    const words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (transliterationMap4.hasOwnProperty(char)) {
                if ((char === 'Е' || char === 'е') && (j === 0 || 'аэиоуыеёюяъьАЭИОУЫЕЁЮЯЪЬ'.includes(word[j - 1]))) {
                    char = (char === 'Е') ? 'Je' : 'je';
                } else if ((char === 'Е' || char === 'е') && (j > 0) && ('жлцчшщЖЛЦЧШЩ'.includes(word[j - 1]))) {
                    char = (char === 'Е') ? 'E' : 'e';
                } else if ((char === 'Ё' || char === 'ё') && (j === 0 || 'аэиоуыеёюяъьАЭИОУЫЕЁЮЯЪЬ'.includes(word[j - 1]))) {
                    char = (char === 'Ё') ? 'Jo' : 'jo';
                } else if ((char === 'Ё' || char === 'ё') && (j > 0) && ('жлчшщЖЛЧШЩ'.includes(word[j - 1]))) {
                    char = (char === 'Ё') ? 'O' : 'o';
                } else if ((char === 'И' || char === 'и') && (j > 0) && ('ьЬ'.includes(word[j - 1]))) {
                    char = (char === 'И') ? 'Ji' : 'ji';
                } else if ((char === 'л' || char === 'Л') && (j < word.length - 1) && ('еёюяиьЕЁЮЯИЬ'.includes(word[j + 1]))) {
                    char = (char === 'Л') ? 'L' : 'l';
                } else if ((char === 'ь' || char === 'Ь') && ((j < word.length - 1 && 'аэиоуыеёюяАЭИОУЫЕЁЮЯ'.includes(word[j + 1])) || (j > 0 && 'лжшщчЛЖШЩЧ'.includes(word[j - 1])))) {
                    char = '';
                } else if ((char === 'Ю' || char === 'ю' || char === 'Я' || char === 'я') && (j > 0 && 'лЛ'.includes(word[j - 1]))) {
                    char = (char === 'Ю') ? 'U' : (char === 'ю') ? 'u' : (char === 'Я') ? 'A' : 'a';
                } else {
                    char = transliterationMap4[char];
                    if (word.length > 1 && word === word.toUpperCase()) { 
                        char = char.toUpperCase(); 
                    }
                }
            }
            output += char;
        }
        if (i < words.length - 1) {
            output += ' ';
        }
    }
    return output;
}


// Jeśli litery Е, е występują po ж, л, ц, ч, ш, щ, Ж, Л, Ц, Ч, Ш, Щ wtedy transliteruj je jako odpowiednio E, e.
// Jeśli litery Е, е występują na początku wyrazu lub po а, э, и, о, у, ы, е, ё, ю, я, ъ, ь, А, Э, И, О, У, Ы, Е, Ё, Ю, Я, Ъ, Ь wtedy transliteruj je jako odpowiednio Je, je.
// Jeśli litery Ё, ё występują po ж, л, ч, ш, щ, Ж, Л, Ч, Ш, Щ wtedy transliteruj je jako odpowiednio O, o.
// Jeśli litery Ё, ё występują na początku wyrazu lub po а, э, и, о, у, ы, е, ё, ю, я, ъ, ь, А, Э, И, О, У, Ы, Е, Ё, Ю, Я, Ъ, Ь wtedy transliteruj je jako odpowiednio Jo, jo.
// Jeśli litery И, и występują po ж, ш, ц, Ж, Ш, Ц wtedy transliteruj je jako odpowiednio Y, y.
// Jeśli litery И, и występują po ь, Ь wtedy transliteruj je jako odpowiednio Ji, ji.
// Jeśli litery л, Л występują przed е, ё, ю, я, и, ь, Е, Ё, Ю, Я, И, Ь wtedy transliteruj je jako odpowiednio L, l.
// Jeśli litery ь, Ь występują przed а, э, и, о, у, ы, е, ё, ю, я, А, Э, И, О, У, Ы, Е, Ё, Ю, Я lub po л, ж, ш, щ, ч, Л, Ж, Ш, Щ, Ч wtedy transliteruj je jako odpowiednio L, l.
// Jeśli litery Ю, ю, Я, я występują na początku wyrazu lub po а, э, и, о, у, ы, е, ё, ю, я, ъ, ь, А, Э, И, О, У, Ы, Е, Ё, Ю, Я, Ъ, Ь wtedy transliteruj je jako odpowiednio Ju, ju, Ja, ja.
// Jeśli litery Ю, ю, Я, я występują po literach л, Л wtedy zamieniaj je odpowiedno na U, u, A, a.

