/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов в обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение
//=============================================================================

// проверяем аргументы на то, являются ли они объектами
const validator = function(item) {
// исключаем все (почти все :) ), что не есть объектами, а также массивы и null 
	if (!(typeof item === "object" && !Array.isArray(item) && item !== null)) {
		
		throw new Error('Arguments are not objects!');
	}
}

const shallowMerge = function(obj1, obj2) {
	
	// пропускаем аргументы через валидатор
	for (arg of arguments) {

		validator(arg);
	}
	
	// т.к. бизнес-условиями не оговорено сохранить входящие объекты от мутации, то задачу можно решить следующей строкой:
	// const objResult = Object.defineProperties(obj1, Object.getOwnPropertyDescriptors(obj2));
	
	// но для сохранения хорошего тона можно ввести доп. переменные и оставить входящие объекты в исходном состоянии: 
	// делаем копию первого объекта со значениями дескрипторов в пустой объект и сохраняем во временный объект
	const objTemp = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj1));
	
	// добавляем второй объект со значениями дескрипторов во временный объект и сохраняем результат 
	const objResult = Object.defineProperties(objTemp, Object.getOwnPropertyDescriptors(obj2));
	
	return objResult;
}
//=============================================================================

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' } <- DONE!
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false <- DONE!
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false <- DONE!

// exports.shallowMerge = shallowMerge;
