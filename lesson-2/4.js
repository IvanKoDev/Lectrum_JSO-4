// Перепишите код с использованием одной конструкции switch :

const value = 3;

// if ============================================

// if (value === 0) {
//     console.log(0);
// }

// if (value === 1) {
//     console.log(1);
// }

// if (value === 2 || value === 3) {
//     console.log('2,3');
// }

// switch=========================================

switch (value) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
        
}