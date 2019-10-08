/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f() {
    let sum = 0;
    
	for (item of arguments) {
		if (typeof item !== 'number') {
			throw new Error(`'${item}' - argument is not a number`);
		}
		sum += item;
	}

	return `the sum of arguments equal ${sum}`;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // the sum of arguments equal 9
console.log(f(1, 1, 1, 2, 1, 1)); // the sum of arguments equal 7
console.log(f(1, 1, 'n', 2, 1, 1, 1, 1)); // Error: 'n' - argument is not a number

// exports.f = f;
