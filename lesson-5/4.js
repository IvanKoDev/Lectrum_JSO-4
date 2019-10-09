/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 *
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

function f(dayOfWeek) {
	const weekDays = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	];

	if (typeof dayOfWeek !== 'number') {
		throw new Error(`'${dayOfWeek}' - argument is not a number`);
	}
	
	if (typeof dayOfWeek < 1 || dayOfWeek > 7) {
		throw new Error(`'${dayOfWeek}' - enter the number from 1 to 7`);
	}
	const result = weekDays[dayOfWeek - 1];

	return result;
}

console.log(f(1)); // Воскресенье
console.log(f(4)); // Среда
console.log(f(7)); // Суббота
// console.log(f(8)); // Error: '8' - enter the number from 1 to 7
// console.log(f('n')); // Error: 'n' - enter the number from 1 to 7

// exports.f = f;
