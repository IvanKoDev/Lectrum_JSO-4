/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число в качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isEven = function(num) {
    
    if (typeof num !== 'number') {
		throw new Error('argument is not a number type');
	}

	const result = num % 2 === 0 ? true : false;

	return result;
};

console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(21)); // false
console.log(isEven(42)); // true
console.log(isEven('42')); // Error: argument is not a number type

// exports.isEven = isEven;
