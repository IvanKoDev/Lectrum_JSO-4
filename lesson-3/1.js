/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(string) {

	if (typeof string === 'string') { // проверяем принятый аргумент на сооответствие типу string
		const strFirstLetterUpped = string.charAt(0).toUpperCase(); // выделяем первый символ принятой строки и делаем его заглавным
		const newString = strFirstLetterUpped + string.slice(1, string.length); // создаем новую строку, заменив в ней первый символ на заглавный

		return newString; // возвращаем новую строку
    
    }
	return 'The parameter must be a string!'; // если принятый аргумент не строка, сообщаем об этом
}

console.log(upperCaseFirst('pitter')); // Pitter
// console.log(upperCaseFirst('olgerda')); // Olgerda
// console.log(upperCaseFirst('')); // ''
// console.log(upperCaseFirst(1)); // 'The parameter must be a string!'

// exports.upperCaseFirst = upperCaseFirst;
