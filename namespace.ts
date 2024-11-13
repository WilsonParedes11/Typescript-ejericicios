namespace AllGreetings {

    export namespace Greetings {

        export function returnGreeting(greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}`);
        }
    }
    export namespace GreetingsWithLength {

        export function returnGreeting(greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long`);
        }

        function getLength(message: string): number {
            return message.length;
        }
    }
}

//Definición de un alias de espacio de nombres

import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');


//returnGreetings("Hello from the first function");

AllGreetings.Greetings.returnGreeting("hola desde la primera función");
AllGreetings.GreetingsWithLength.returnGreeting("hola desde la segunda función");

