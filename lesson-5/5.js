/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число в качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isPositive = function(num) {
    
    if (typeof num !== 'number') {
		throw new Error('argument is not a number type');
	}
	const result = num >= 0 ? true : false;

	return result;
};

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true
console.log(isPositive(0)); // true
console.log(isPositive('3')); // Error: argument is not a number type

// exports.isPositive = isPositive;
