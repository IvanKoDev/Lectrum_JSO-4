/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(a, b, c) {
	let result = 0;

	for (item of arguments) {
		if (typeof item !== 'number') {
			throw new Error(`'${item}' - argument is not a number`);
        	}
        
        result = (a - b) / c;
	}

	return result;
}

console.log(f(9, 3, 2)); // 3
console.log(f(8, 4, 2)); // 2
console.log(f(9, '3', 2)); // Error: '3' - argument is not a number

// exports.f = f;
