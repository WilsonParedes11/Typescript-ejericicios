import GestorTareas from "./gestionTareas";
import { PrioridadTarea } from "./tipos";

function main() {

    const gestor = new GestorTareas();

    //Agregamos tareas

    const tarea1 = gestor.agregarTarea(
        "Comprar leche",
        "Ir al supermercado y comprar leche",
        PrioridadTarea.Baja
    )

    const tarea2 = gestor.agregarTarea(
        "Sacar la basura",
        "Sacar la basura de la cocina",
        PrioridadTarea.Media
    )

    const tarea3 = gestor.agregarTarea(
        "Estudiar",
        "Estudiar programación",
        PrioridadTarea.Alta
    )

    //Mostremos las tareas
    console.log("Tareas:");
    console.log(gestor.obtenerTareas());

    //Completamos una tarea
    console.log("Completamos la tarea 1");
    gestor.completarTarea(tarea1.id);

    //Filtra tareas por prioridad
    const tareasAlta = gestor.filtrarTareasPorPrioridad(PrioridadTarea.Alta);
    console.log("Tareas con prioridad alta:");
    console.log(tareasAlta);

    //Obtenemos tareas completadas y pendientes
    console.log("Tareas completadas:");
    console.log(gestor.obtenerTareasCompletadas());

    console.log("Tareas pendientes:");
    console.log(gestor.obtenerTareasPendientes());
}

main();