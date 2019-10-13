/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение
// ==================================================================================

// если исходный массив многоуровневый, конвертируем его в одноуровневый применив рекурсивно метод .reduce()
function flatter(array) {

	if (!Array.isArray(arguments[0])) {
        throw new Error ('argument is not an array!');
	};
	
	
	// не уверен в "правильности" форматирования этого тернарника
	return array.reduce((accumulator, currentValue) =>
		Array.isArray(currentValue) ?
		accumulator.concat(flatter(currentValue)) :
		accumulator.concat(currentValue),
		[]);
};
//--------------------------------------------------------------

// задаем бизнес-условия для метода .reduce() в фции reducer():
// - валидируем элементы принятого массива на принадлежность к number;
// - суммируем элементы принятого массива.
const reducer = function (accumulator, currentValue) {
	
	// валидация элементов
	if (typeof arguments[0] !== 'number' && arguments[1] !== 'number') {
		throw new Error ('elements of array are not a numbers!')
	}

	
	// вычисление суммы элементов
	return accumulator + currentValue;
};

// выполняем бизнес-условие для принятого массива -> возвращаем сумму элементов
const collect = function(array) {
	
	if (typeof arguments[0] === 'undefined') {
		throw new Error ('array does not contain numbers!')
	}

	return flatter(array).reduce(reducer);
};


const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

// exports.collect = collect;
