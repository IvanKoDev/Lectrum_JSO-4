// Перепишите if..else с использованием нескольких операторов ? .
// Для читаемости — оформляйте код в несколько строк.

var message;

var login;                    
// var login = 'Piter';                    
// var login = 'Owner';                    
// var login = '';                    

// if ... else if =======================================

if (login == 'Piter') {
    message = 'Hi';
} else if (login == 'Owner') {
    message = 'Hello';
} else if (login == '') {
    message = 'unknown';
} else {
    message = null;
}

console.log('message_(if..else): ', message);

// ternary ==============================================

var message = (login == 'Piter') ? 'Hi' :
                (login == 'Owner') ? 'Hello' :
                    (login == '') ? 'unknown' : null;


console.log('message_(?): ', message);