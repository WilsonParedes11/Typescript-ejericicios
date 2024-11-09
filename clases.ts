class startup{

    private text: string;

    constructor(texto: string){
        this.text = texto;
    }

    public main () : number {
        console.log(this.text);
        return 0;
    }
}

let star = new startup('Hello World');
star.main();