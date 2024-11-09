"use strict";
class Calculo {
    //constructor de la clase
    constructor(x, y) {
        //variables de clase declaradas y asignadas
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    //Setters 
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    //Getters
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    //Metodo de la clase
    sumar() {
        return (this.getX() + this.getY());
    }
    restar() {
        return (this.getX() - this.getY());
    }
    menor() {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    }
    mayor() {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    }
}
let calculo = new Calculo(10, 5);
console.log(calculo.sumar());
console.log(calculo.restar());
console.log(calculo.menor());
console.log(calculo.mayor());
