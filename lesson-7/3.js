/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
//==================================================================

// фция для проверки параметров на соответствие бизнес-условиям
const validator = function(value, length) {

	// проверка параметра value на соответствие заданным типам данных
	if (!(typeof value === 'number') && !(typeof value === 'string') && !(typeof value === 'object')) {
		if (!Array.isArray(value)) {

			throw new Error('wrong type of new array element!');
		}
	}
	
	// проверка параметра length на соответствие типу number
	if (typeof length !== 'number') {

		throw new Error('the length of new array is not a number!');
	}
};

const createArray = function(value, length) {

	validator(value, length);

	let arr = new Array (length); 		// создаем массив пустых элементов с длиной length
	arr.fill(value);					// заполняем массив значениями value
	
	return arr;							// возвращаем созданный массив
	
	// return Array(length).fill(value) // короткий вариант
};

//--------------------------------------------------------------------

const result = createArray('x', 5);
console.log(result); // [ x, x, x, x, x ]

const result1 = createArray(undefined, 3);
console.log(result1); // Error: wrong type of new array element!

const result2 = createArray('x', '5');
console.log(result2); // Error: the length of new array is not a number!

// exports.createArray = createArray;
