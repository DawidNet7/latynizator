const transliterationMap2 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'E', 'е': 'e', 'Ё': 'Ë', 'ё': 'ë', 'Ж': 'Zh', 'ж': 'zh',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'Y', 'й': 'y', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'Kh', 'х': 'kh', 'Ц': 'Ts', 'ц': 'ts',
    'Ч': 'Ch', 'ч': 'ch', 'Ш': 'Sh', 'ш': 'sh', 'Щ': 'Shch', 'щ': 'shch', 'Ъ': 'ʺ', 'ъ': 'ʺ',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'E', 'э': 'e', 'Ю': 'Yu', 'ю': 'yu',
    'Я': 'Ya', 'я': 'ya',
};

function transliterateRussianToLatin2(input) {
    let output = '';
    const words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (transliterationMap2.hasOwnProperty(char)) {
                // Sprawdzanie czy dany znak to 'Е', 'е', 'Ё', lub 'ё' i czy poprzedni znak jest na liście specjalnych znaków
                if (['Е', 'е', 'Ё', 'ё'].includes(char) && (j > 0 && 'аеёиоуыэюяйъьАЕЁИОУЫЭЮЯЙЪЬ'.includes(word[j-1]))) {
                    switch (char) {
                        case 'Е':
                            char = 'Ye';
                            break;
                        case 'е':
                            char = 'ye';
                            break;
                        case 'Ё':
                            char = 'Yë';
                            break;
                        case 'ё':
                            char = 'yë';
                            break;
                    }
                } else {
                    char = transliterationMap2[char];
                }
                // Jeśli całe słowo w cyrylicy jest zapisywane dużymi literami, zapisz je dużymi
                if (word === word.toUpperCase()) {
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
