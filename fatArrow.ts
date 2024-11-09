// function Person(age){
//     this.age = age
//     //ejecutandola en el navegador el this es window
//     // ya que es quien hace la llamada
//     this.growOld = function(){
//         this.age++;
//     }
// }

// var person = new Person(1);
// setTimeout(person.growOld,1000);//deberia incrementar 1+1=2
// setTimeout(function(){console.log(person.age);},2000)//Devuelve 1, deberia ser 2

// function Person(age){
//     this.age = age
//     //aqui el this es el objeto y no hace la llamada
//     this.growOld=() =>{
//         this.age++;
//     }
// }

// var person = new Person(1);
// setTimeout(person.growOld,1000);
// setTimeout(function(){console.log(person.age);},2000);

// class Person {
//     constructor(public age: number) { }
//     growOld = () => {
//         this.age++;
//     }
// }


// var person = new Person(1);
// setTimeout(person.growOld, 1000);
// setTimeout(function () { console.log(person.age); }, 2000)

//¿Cómo utilizar funciones con herencia?
// class Adder {
//     // This function is now safe to pass around
//     add = (b: string): string => {
//         return this.a + b;
//     }
// }
// class ExtendedAdder extends Adder {
//     // Create a copy of parent before creating our own
//     private superAdd = this.add;
//     // Now create our override
//     add = (b: string): string => {
//         return this.superAdd(b);
//     }
// }

//Cadenas de fat arrow (Currying)

// A curried function
let add = (x:number) => (y:number) => x+y;

//simple usage
add(123)(456);

//partially applied
let add123 = add(123);

//fully apply the function
add123(456);