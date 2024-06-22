// Code fix by: nameless_from_poland (Discord)

const transliterationMap101 = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd', 'Е': 'Je', 'е': 'je', 'Ё': 'Jo', 'ё': 'jo', 'Ж': 'Ž', 'ж': 'ž',
    'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'H', 'х': 'h', 'Ц': 'C', 'ц': 'c',
    'Ч': 'Č', 'ч': 'č', 'Ш': 'Š', 'ш': 'š', 'Щ': 'Ś', 'щ': 'ś', 'Ъ': '', 'ъ': '',
    'Ы': 'Y', 'ы': 'y', 'Ь': "'", 'ь': "'", 'Э': 'E', 'э': 'e', 'Ю': 'Ju', 'ю': 'ju',
    'Я': 'Ja', 'я': 'ja', ',': ',', '-': '-'
};

function transliterateRussianToLatin101(input) {
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
			let char = "";
			for (let j = 0; j < word.length; j++) {
				const nextChar = word[j];
				char += transliterationMap101[nextChar] || nextChar;
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