/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

const now = new Date(); // текущая дата
const nowMonth = now.getMonth() + 1; // текущий месяц (начиная с 1)
const nowYear = now.getFullYear(); // текущий год

function getDeysFromMonth(nowMonth) { // возвращает количество дней в текущем месяце
	let daysInMonth; // сюда сохраним количество дней в текущем месяце
	let isLeapYear = (nowYear % 4 == 0 && nowYear % 100 != 0) || nowYear % 400 == 0; // проверим не высокосный ли сейчас год
    
    switch (nowMonth) {
		case 2:
			daysInMonth = isLeapYear ? 29 : 28; // определим длительность февраля в зависимости от текущего года
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			daysInMonth = 30; // определим месяцы длительностью 30 дней
			break;
		default:
			daysInMonth = 31; // остальные месяци длятся 31 день
	}
	return daysInMonth;
}

const nowDate = now.getDate(); // текущий день месяца

function salary(nowDate) { // вычисляем, пропустили ли мы день зарплаты и возвращаем соответствующее сообщение
    let salaryDay = getDeysFromMonth(nowMonth) - 20; // запишем дату зарплаты в текущем месяце

    if (nowDate < salaryDay) {
		return 'good salary';
	}
	return 'bad salary';
}

// console.log(getDeysFromMonth(nowMonth)); // 30 - проверяем количество дней в текущем месяце 
// console.log(salary(nowDate)); // 10 - вычисляем день зарплаты (30 - 20) и сообщение

person.salary = salary(nowDate); // записываем свойство salary объекту person
console.log(person.salary); // bad salary

// exports.person = person;
