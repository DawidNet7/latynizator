const transliterationMap103 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'W', 'в': 'w', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'Je', 'е': 'je', 'Ё': 'Jo', 'ё': 'jo', 'Ж': 'Ż', 'ж': 'ż',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'Ch', 'х': 'ch', 'Ц': 'C', 'ц': 'c',
    'Ч': 'Ć', 'ч': 'ć', 'Ш': 'Sz', 'ш': 'sz', 'Щ': 'Ś', 'щ': 'ś', 'Ъ': '', 'ъ': '',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'E', 'э': 'e', 'Ю': 'Ju', 'ю': 'ju',
    'Я': 'Ja', 'я': 'ja',
};

function transliterateRussianToLatin103(input) {
    let output = '';
    const words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (transliterationMap103.hasOwnProperty(char)) {
                char = transliterationMap103[char];
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
