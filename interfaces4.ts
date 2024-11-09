
// Define la interfaz Dog
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}
// Define la función loadDog
async function loadDog(id: number): Promise<Dog> {
    return await (await fetch(`https://api.example.com/dogs/${id}`)).json() as Dog;
}

// implementa la función loadDog
loadDog(1).then(dog => {
    console.log(dog);
});


//Una técnica común para administrar datos en una base de datos es usar lo que se conoce como el "patrón de registro activo", es decir, el objeto en sí tiene save, load y métodos similares. Podemos usar el Dog interfaz definida anteriormente para garantizar que tengamos las mismas propiedades y estructura, al tiempo que agregamos el código necesario para realizar las operaciones.
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({ name, age, description, id = 0 }: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): Promise<DogRecord> {
        return loadDog(id).then(dog => new DogRecord(dog));
    }

    // Código para guardar un dog en la base de datos
    save(): Promise<void> {
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