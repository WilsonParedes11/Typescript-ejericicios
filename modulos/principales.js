"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saludos_modulos_1 = require("./saludos_modulos");
var allGreetingFunctions = require("./saludos_modulos"); // imports all exported components in the module
var saludos_utilidades_modulos_1 = require("./saludos_utilidades_modulos");
(0, saludos_modulos_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
(0, saludos_utilidades_modulos_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
