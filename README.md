Compilación de TypeScript en JavaScript
Vamos a agregar código JavaScript al archivo TypeScript y, luego, a compilarlo.

Copie y pegue el siguiente código JavaScript en el editor de module01.ts.

JavaScript

Copiar
function addNumbers(x, y) {
  return x + y;
}
console.log(addNumbers(3, 6));
Tenga en cuenta que, aunque todavía no ha compilado el código, Visual Studio Code ha usado su compatibilidad integrada con TypeScript para realizar una comprobación del tipo. Igual que antes, hay errores de tipo en los dos parámetros de la función addNumbers.

Visual Studio Code editor with IntelliSense, showing that there's a type-checking error on the first parameter of the addNumbers function.

Actualice el código TypeScript para especificar un tipo para cada parámetro. Reemplace x por x: number y reemplace y por y: number.

Guarde el archivo TypeScript. El compilador de TypeScript solo funciona en la versión guardada del archivo.

En el símbolo del sistema del terminal, escriba tsc module01.ts. El compilador debería ejecutarse sin errores.

Observe que se ha agregado un nuevo archivo JavaScript, pero no se encuentra en la carpeta build del explorador. Es posible que tenga que actualizar el panel del explorador para ver el archivo. Al ejecutar el comando tsc en un solo archivo, el compilador omite el archivo tsconfig.json.

Para cargar el archivo de configuración y compilar todos los archivos .ts de la carpeta, ejecute tsc sin ningún nombre de archivo. Este comando debería agregar el archivo .js a la carpeta build. Recuerde eliminar el archivo .js adicional de la carpeta raíz.

Abra el archivo module01.js y, luego, seleccione el botón Dividir editor a la derecha de la esquina superior derecha para abrir una nueva vista del editor.

Ahora debería poder ver los archivos .ts y .js en paralelo. Tenga en cuenta que son idénticos, con la única diferencia de que el archivo .js no incluye las nuevas anotaciones de tipo.

En el símbolo del sistema de Terminal, escriba node ./build/module01.js. Este comando ejecuta JavaScript y muestra el resultado en el registro de la consola.