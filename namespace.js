var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log("The message from namespace Greetings is ".concat(greeting));
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        var greetingLength = getLength(greeting);
        console.log("The message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " characters long"));
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
//returnGreetings("Hello from the first function");
Greetings.returnGreeting("Hello from the second function");
GreetingsWithLength.returnGreeting("Hello from the third function");