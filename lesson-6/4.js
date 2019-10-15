/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

// const array = [1, 2, 'Добро пожаловать.', 4, 5, 6]; //some вернет true
// const array = ['1', '2', '3'];                   //some вернет true
// const array = [1, 2, 3, 4];                      //some вернет false

// Решение

const validator = function(arrayRef, callback) {
	// проверка первого аргумента на принадлежность к массивам
	if (!Array.isArray(arrayRef)) {
		throw new Error('first argument is not an array');
	}

	// проверка второго аргумента на принадлежность к функциям
	if (typeof callback !== 'function') {
		throw new Error('second argument is not a function');
	}
};

const some = function(arrayRef, callback) {

	validator(arrayRef, callback);
    
    for (let i = 0; i < arrayRef.length; i++) {
		if (callback(arrayRef[i], i, arrayRef)) {
			return true;
		};
	};
	return false;
};

const result = some(array, (element, index, arrayRef) => {
    // console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

// exports.some = some;
