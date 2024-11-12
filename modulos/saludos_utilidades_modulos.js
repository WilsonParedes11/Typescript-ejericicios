"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = returnGreeting;
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from Greetings_module is   ".concat(greeting, " and the length is ").concat(greetingLength));
}
function getLength(message) {
    return message.length;
}
