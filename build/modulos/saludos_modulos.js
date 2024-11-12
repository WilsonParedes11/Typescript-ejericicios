"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = returnGreeting;
//El export statement hace explícitamente que un componente en un módulo esté disponible para otros módulos, mientras que el import declaración le permite consumir ese componente de otro módulo. Los módulos son declarativos; el import y export las declaraciones a nivel de archivo describen las relaciones entre ellas.
function returnGreeting(greeting) {
    console.log(`The message from Greetings_module is   ${greeting}`);
}
