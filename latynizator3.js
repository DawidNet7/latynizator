const transliterationMap3 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'E', 'е': 'e', 'Ё': 'Ë', 'ё': 'ë', 'Ж': 'Ž', 'ж': 'ž',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'Ch', 'х': 'ch', 'Ц': 'C', 'ц': 'c',
    'Ч': 'Č', 'ч': 'č', 'Ш': 'Š', 'ш': 'š', 'Щ': 'Šč', 'щ': 'šč', 'Ъ': 'ʺ', 'ъ': 'ʺ',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'È', 'э': 'è', 'Ю': 'Ju', 'ю': 'Ju',
    'Я': 'Ja', 'я': 'ja',
};

function transliterateRussianToLatin3(input) {
    let output = '';
    const words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (transliterationMap3.hasOwnProperty(char)) {
                char = transliterationMap3[char];
                if (word.length > 1 && word === word.toUpperCase()) { 
                    char = char.toUpperCase(); 
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
