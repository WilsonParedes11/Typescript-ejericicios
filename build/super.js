"use strict";
//Super
//Super sin fat arrow
class Base {
    log() { console.log('Hello from Base'); }
}
class Child extends Base {
    log() {
        super.log();
    }
}
//this con fat arrow
class Base2 {
    constructor() {
        //realizamos una funcion mediante el uso de fat arrow
        this.log = () => { console.log('Hello from Base'); };
    }
}
class Child2 extends Base2 {
    logWorld() { this.log(); }
}
