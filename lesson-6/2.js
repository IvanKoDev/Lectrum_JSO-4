/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = [3, 'Доброе утро!', 'Добрый вечер!',	3,	512, '#', 'До свидания!'];

// Решение

// переменная для хранения искомого
let filterIt = 'Добрый вечер!'; 	// -> ['Добрый вечер!'], элемент найден
//  filterIt = 4;	 				// -> [], элемент не найден

const validator = function(arrayRef, callback) {
	
	// проверка первого аргумента на принадлежность к массивам
	if (!Array.isArray(arrayRef)) {
		throw new Error('first argument is not an array');
	};

	// проверка второго аргумента на принадлежность к функциям
	if (typeof callback !== 'function') {
		throw new Error('second argument is not a function');
	};
};

const filter = function(arrayRef, callback) {
	
	validator(arrayRef, callback);

	let result = []; // задаем массив-хранилище для записи искомого значения

	for (let i = 0; i < arrayRef.length; i++) { 		// перебираем значения и передаем их в callback
			if (callback(arrayRef[i], i, arrayRef)) { 	// если callback находит знечение, ->
				result.push(arrayRef[i]);				// -> то записываем его в хранилище result
			};
	};
	return result; 
};

// Результат поиска сохраняем в новый массив filteredArray
// В filter передаем колбэк функцию, которая ищет елемент массива с заданным в filterIt значением
const filteredArray = filter(array, (element, index, arrayRef) => {
	return element === filterIt;
});

console.log(filteredArray); // ['Добрый вечер!'] <- DONE!

// exports.filter = filter;