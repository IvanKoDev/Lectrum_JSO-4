// Перепишите код, заменив оператор if на тернарный оператор ?

const a = 2;
const b = 1;

let result = null;

// if ====================================

if (a + b < 4) {
    result = true;
} else {
    result = false;
}

console.log('(if) ', result);

// tarnary ================================

result = (a + b < 4) ? true : false;

console.log('(?) ', result);