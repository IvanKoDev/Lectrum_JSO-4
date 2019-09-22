// Напишите код, который посчитает сумму всех парных элементов в массиве. В
// суммировании участвуют только элементы больше 3.
// Использовать встроенные методы массивов — нельзя.

const array = [1, 2, 3, 4, 5, 6]; // arrayEvenElementsSum = 10

let i = 0;
let arrayEvenElementsSum = 0;

while (array[i] >= 0 || array[i] <= 0 ) {   // КОСТЫЛЬ! Не понимаю, почему без проверки на >= 0 || <= 0 в случае,
                                            // если arr[i] = 0, счетчик останавливается и этот элемент не учитывается
    if ((array[i] % 2 == 0) && (array[i] > 3)) {
        arrayEvenElementsSum += array[i];
    }

    i++;
}

console.log('arrayEvenElementsSum: ', arrayEvenElementsSum);