/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

// const PRICE = '$120'; // 120
// const PRICE = 120; // null

// Решение

function extractCurrencyValue(PRICE) {
    
    if (typeof PRICE === 'string') { // проверяем аргумент на принадлежность типу string

        PRICE = +PRICE.slice(1, PRICE.length); // отсекаем знак валюты и возвращаем число добавлением '+' перед строкой
        
        console.log('typeof PRICE is', typeof PRICE);
        return (PRICE); // возвращаем сумму в числовом виде
    }
    return null; // если аргумент не является строкой, возвращаем nullk
}

console.log(extractCurrencyValue(PRICE)); // 120

// exports.extractCurrencyValue = extractCurrencyValue;