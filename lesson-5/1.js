/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f(n) {
    
    if (typeof n !== 'number') {
		throw new Error('argument is not a number type');
	}
    const square = n * n * n;

	return 'square of ' + n + ' is ' + square;
}

console.log(f(2)); // square of 2 is 8
console.log(f(3)); // square of 3 is 27
console.log(f(4)); // square of 4 is 64
console.log(f('5')); // Error: argument is not a number type

// exports.f = f;
