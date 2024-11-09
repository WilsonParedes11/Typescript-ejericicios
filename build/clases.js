"use strict";
class startup {
    constructor(texto) {
        this.text = texto;
    }
    main() {
        console.log(this.text);
        return 0;
    }
}
let star = new startup('Hello World');
star.main();
