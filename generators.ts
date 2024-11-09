function* infiniteSequence(){
    var i = 0;
    while(true){
        yield i++;
    }
}

var iterator = infiniteSequence();
while(true){
    console.log(iterator.next()); // { value: xxxx, done: false } para siempre
}


function* idMaker(){
    var index = 0;
    while(index < 3)
        yield index++;
}
let gen = idMaker();
console.log((gen.next())); // { value: 0, done: false }
console.log((gen.next())); // { value: 1, done: false }
console.log((gen.next())); // { value: 2, done: false }
console.log((gen.next())); // { value: undefined, done: true } // Accede a la variable por que se le ha dicho apesar de que el 'yield' no ha sido efectuado

function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration'); // Esto se ejecuta antes de que el generador se ejecute
console.log(iterator.next()); // { value: 0, done: false } // Se ejecuta el generador
console.log(iterator.next()); // { value: 1, done: false } // Se ejecuta el generador
console.log(iterator.next()); // { value: undefined, done: true } // Se ejecuta el generador