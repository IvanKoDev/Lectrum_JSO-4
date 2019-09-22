// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше
// 50. Какое число получится? Посчитайте количество итераций, необходимых для этого
// (итерация - это проход цикла), и запишите его в переменную num .
// Использовать встроенные методы массивов — нельзя.

let n = 1000;
let num = 0;
let divRes = n;

do {
    divRes /= 2;
    num++;
}
while (divRes > 50);

console.log('divRes:   ', divRes);
console.log('num: ', num);

console.log(`Если ${n} разделить пополам ${num} раз, получим число ${divRes}`);