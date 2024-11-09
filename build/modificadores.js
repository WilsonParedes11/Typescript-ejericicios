"use strict";
//Modificadores de Clases
class FooBase {
}
//EFECTOS EN INSTANCIAS
var foo = new FooBase();
foo.x; // OK
foo.y; // Error: 'y' es privado
foo.z; // Error: 'z' es protegido
//EFECTOS EN CLASES HIJAS
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // OK
        this.y; // Error
        this.z; // OK
    }
}
