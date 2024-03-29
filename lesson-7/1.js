/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

// Решение
//=======================================================================

const inspect = function(array) {
    
    if (!Array.isArray(arguments[0])) {
        throw new Error ('argument is not an array');
    }

    // возвращаем массив из длин строковых элементов исходного массива:
    // - методом .filter() выделяем строки
    // - методом .map() возвращаем массив с их длинами 
    return array.filter(element => typeof element === 'string').map(element => element.length);
};

//=======================================================================
const result = inspect(array);
console.log(result);            // [ 7, 11, 7, 12 ] - получаем ожидаемый результат

// проводим проверку на соответствие бизнес-условиям
const array1 = [];
console.log(inspect(array1));   // [] - done!

const array2 = [1, 2, 3, 4];
console.log(inspect(array2));   // [] - done!

const array3 = 'string';
console.log(inspect(array3));   // Error: argument is not an array - done!

// exports.inspect = inspect;
