/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
// const array = [];
const INITIAL_ACCUMULATOR = 6;

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

const reduce = function(arrayRef, callback, INITIAL_ACCUMULATOR) {
    
	validator(arrayRef, callback);

    // задаем начальное значение аккумулятора для callback-фции согласно бизнес-условиям
    let accumulator = INITIAL_ACCUMULATOR ? INITIAL_ACCUMULATOR : 0;
    
    // возвращаем INITIAL_ACCUMULATOR если массив пустой
    if (arrayRef.length === 0) {
		return INITIAL_ACCUMULATOR;
	};    

    // пропускаем целевой массив через collback-фцию и накапливаем результат в аккумулятор
    for (let i = 0; i < arrayRef.length; i++) {

        accumulator = callback(accumulator, arrayRef[i], i, arrayRef);
	}

    return accumulator;
};

const result = reduce(
	array,
	(accumulator, element, index, arrayRef) => {
		// console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
	},
	INITIAL_ACCUMULATOR
);

console.log(result); // 21 <- DONE!

// exports.reduce = reduce;
