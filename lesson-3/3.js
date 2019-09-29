/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

function truncate(string, maxLength) {
    let originalStringLength = string.length;
	if (typeof string === 'string' && typeof maxLength === 'number') { // checking arguments types

		if (string.length < maxLength) { // if string is shorter than maxLength, make it longer whith points to maxLength
        
            for (let i = string.length; i < maxLength; i++) {
				string = string + '.';
			}

        } else if (string.length > maxLength) { // if string is longer than maxLength, make it shorter to maxLength and finish it whith three points
			string = string.slice(0, maxLength - 3) + '...';
        }
        
        // returning truncated string
        console.log(`old string length - ${originalStringLength}; maxLength - ${maxLength}; new string lengt - ${string.length}`);
        return string;

    } else {
		return "Check the arguments types: trancate('string', 'number')!"; // return alert if arguments is not a string
	}
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // Вот, что мне хотел...
// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 50)); // Вот, что мне хотелось бы сказать на эту тему:.....
// console.log(truncate('12345', 8)); // 12345..., new string lengt: 8, maxLength: 8
// console.log(truncate('12345', 5)); // 12345, new string lengt: 5, maxLength: 5
// console.log(truncate('12345', 4)); // 1..., new string lengt: 4, maxLength: 4
// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', '21')); // Check the arguments types: trancate('string', 'number')!
// console.log(truncate(21, 21)); // Check the arguments types: trancate('string', 'number')!

// exports.truncate = truncate;
