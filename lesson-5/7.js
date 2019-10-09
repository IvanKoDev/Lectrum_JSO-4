/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

function getDivisors(num) {
	const divisors = []; // массив для записи делителей принятого числа

	// проверка соответствия принятого числа условиям задачи
	if (typeof num !== 'number' || num < 1) {
		throw new Error(`'${num}' - has been entered number < 1 or not a number!`);
	}

	let i;					// перечислитель делителей
	let j = 0;				// перечислитель эл-в массива
	for (i = 1; i <= num; i++) {		// пока делитель не превышает принятое чисо ->
        	if (num % i === 0) {		// -> проверяем, делится ли это число на данный делитель без остатка ->
			divisors[j] = i;	// -> и записываем его в массив
			j++;			// берем следующий элемент массива
		}
	}
	return divisors;			// выводим массив делителей введенного числа
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors(7)); // [1, 7]
console.log(getDivisors(21)); // [1, 3, 7, 21]
console.log(getDivisors('21')); // Error: '21' - has been entered number < 1 or not a number!

// exports.getDivisors = getDivisors;
