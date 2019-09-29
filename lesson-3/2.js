/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(source, example) {

    if (typeof source === 'string' && typeof example === 'string') { // arguments is string checking
        
        // bringing strings to a same register
        let sourceTemp = source.toLowerCase(); 
        let exampleTemp = example.toLowerCase();
        
        return sourceTemp.includes(exampleTemp); // searching 'source' includes 'example' and returning boolean 
    }

    return 'Arguments must be a string!'; // return alert if arguments are not a string
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
// console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true
// console.log(checkSpam('pitterxxx@gmail.com', 'yyy')); // false
// console.log(checkSpam('ababagalamaga', 'GaLa')); // true
// console.log(checkSpam(123, '123')); // Arguments must be a string!
// console.log(checkSpam('123', 123)); // Arguments must be a string!

// exports.checkSpam = checkSpam;