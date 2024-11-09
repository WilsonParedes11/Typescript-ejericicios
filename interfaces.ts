// las interfaces son las encargadas de comprobar los tipos de las variables que
//se pasan como argumentos y del cumplimiento de los contratos

interface a {
    b: number;
}

interface b extends a {
    c: string;
}

class test implements b {
    b: number;
    c: string;

    constructor(b: number, c: string){
        this.b = b;
        this.c = c;
    }
}