class Calculo {

    //variables de clase declaradas y asignadas
    private x: number = 0;
    private y: number = 0;

    //constructor de la clase
    constructor(x: number, y : number){
        this.x = x;
        this.y = y;
    }

    //Setters 
    public setX(x: number) : void {
        this.x = x;
    }
    
    public setY(y: number) : void {
        this.y = y;
    }

    //Getters
    public getX() : number {
        return this.x;
    }

    public getY() : number {
        return this.y;
    }

    //Metodo de la clase
    public sumar() : number {
        return (this.getX() + this.getY());
    }

    public restar() : number {
        return (this.getX() - this.getY());
    }

    public menor() : number {
        if (this.getX()>=this.getY()){
            return this.getY();
        }
        return this.getX();
    }

    public mayor() : number {
        if( this.getX() >= this.getY()){
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
