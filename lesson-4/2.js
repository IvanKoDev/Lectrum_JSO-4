/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// Решение
//=====================================================================================

// создаем пустой объект
const person = {};

// задаем объекту свойства rate и salary
Object.defineProperties(person, {
    rate: { // значение не задано - undefined
        enumerable: false,
        configurable: false,
        writable: true,
    },
    
    salary: { // getter
        get() {
            const now = new Date();
            const date = now.getDate();
            const money = date * this.rate;
            
            if (this.rate === undefined) { // проверка значения свойства rate
                return 0;
            }
            return money;
        },
        enumerable: false,
        configurable: false,
    }
});

person.rate = 30; // записываем в свойство rate значение
// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300

console.log(person.salary);

// exports.person = person;