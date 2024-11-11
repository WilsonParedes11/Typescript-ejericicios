"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define la función loadDog
function loadDog(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield fetch(`https://api.example.com/dogs/${id}`)).json();
    });
}
// implementa la función loadDog
loadDog(1).then(dog => {
    console.log(dog);
});
//Una técnica común para administrar datos en una base de datos es usar lo que se conoce como el "patrón de registro activo", es decir, el objeto en sí tiene save, load y métodos similares. Podemos usar el Dog interfaz definida anteriormente para garantizar que tengamos las mismas propiedades y estructura, al tiempo que agregamos el código necesario para realizar las operaciones.
class DogRecord {
    constructor({ name, age, description, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static load(id) {
        return loadDog(id).then(dog => new DogRecord(dog));
    }
    // Código para guardar un dog en la base de datos
    save() {
        return fetch(`https://api.example.com/dogs/${this.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Error al guardar el dog en la base de datos');
            }
        });
    }
}
