export function returnGreeting(greeting: string){
    let greetingLength = getLength(greeting);
    console.log(`The message from Greetings_module is   ${greeting} and the length is ${greetingLength}`);
}

function getLength(message: string): number{
    return message.length;
}