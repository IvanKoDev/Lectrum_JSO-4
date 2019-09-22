// Перепишите код, заменив оператор switch на оператор if..else :

const value = 'a';
// const value = 'b';
// const value = 'c';
// const value = 'd';
// const value = 'e';
// const value = '';

// switch ... case ================================

switch (value) {
    case 'a':
        console.log('(switch) a');
        break;
    
    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log('(switch) others');
        break;
    
    default:
        console.log('(switch) unknown');
}

// if ... else ====================================

if (value == 'a') {
    console.log('(if..else)', value);
} else {
    
    if (value == 'b') {
        console.log('(if..else) others');
    } else {
        
        if (value == 'c') {
            console.log('(if..else) others');
        } else {
        
            if (value == 'd') {
                console.log('(if..else) others');
            } else {
                
                if (value == 'e') {
                    console.log('(if..else) others');
                } else {
                    console.log('(if..else) unknown')
                }
            }
        }
    }
}