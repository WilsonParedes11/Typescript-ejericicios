"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = returnGreeting;
function returnGreeting(greeting) {
    let greetingLength = getLength(greeting);
    console.log(`The message from Greetings_module is   ${greeting} and the length is ${greetingLength}`);
}
function getLength(message) {
    return message.length;
}
