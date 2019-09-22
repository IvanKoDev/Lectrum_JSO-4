// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

const array = [1, 2, 3, 4]; // arrayElementsSum = 10
// const array = [1, 2, 3, 4, 5, -10]; // arrayElementsSum = 5

let i = 0;
let arrayElementsSum = 0;

while (array[i] >= 0 || array[i] <= 0 ) {   // КОСТЫЛЬ! Не понимаю, почему без проверки на >= 0 || <= 0 в случае,
                                            // если arr[i] = 0, счетчик останавливается и этот элемент не учитывается
    arrayElementsSum += array[i];
    i++;
}

console.log('arrayElementsSum: ', arrayElementsSum);