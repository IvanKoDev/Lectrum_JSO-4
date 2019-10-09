/**
 * Задача 8.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

// const array = [1, 2, 3];

function f(array) {
	if (!Array.isArray(array)) {
		throw new Error('argument is not an array');
	}
	
	if (array.length === 0) {
		throw new Error('argument is an empty array');
	}
	
	function recurs(array) {
		if (array.length !== 0) {
			console.log(array[0]); // вывожу перевый элемента
			
			array.splice(0, 1); // если массив не пустой, обрезаю первый элемент
			recurs(array); // замыкаю круг
		};
	};
	recurs(array);
};

f([1, 2, 3]);
// 1
// 2
// 3
console.log('---------------------------------')

f(1);
// Error: argument is not an array
console.log('---------------------------------')

f([]);
// Error: argument is an empty array


// exports.f = f;