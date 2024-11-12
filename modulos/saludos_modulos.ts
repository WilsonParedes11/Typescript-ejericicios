//El export statement hace explícitamente que un componente en un módulo esté disponible para otros módulos, mientras que el import declaración le permite consumir ese componente de otro módulo. Los módulos son declarativos; el import y export las declaraciones a nivel de archivo describen las relaciones entre ellas.
export function returnGreeting(greeting: string){
    console.log(`The message from Greetings_module is   ${greeting}`);
}