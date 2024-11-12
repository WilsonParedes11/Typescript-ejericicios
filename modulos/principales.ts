import { returnGreeting } from "./saludos_modulos";
import * as allGreetingFunctions from './saludos_modulos';  // imports all exported components in the module
import { returnGreeting as returnGreetingLength } from './saludos_utilidades_modulos';

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'