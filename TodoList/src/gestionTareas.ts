import { Tarea, PrioridadTarea } from "./tipos";

class GestorTareas {

    private tareas: Tarea[] = [];
    private contadorId: number = 0;

    agregarTarea(titulo: string, descripcion: string, prioridad: PrioridadTarea): Tarea {

        const nuevaTarea: Tarea = {
            id: this.contadorId++,
            titulo,
            descripcion,
            fechaCreacion: new Date(),
            prioridad,
            completada: false
        };

        this.tareas.push(nuevaTarea);
        return nuevaTarea;
    }

    obtenerTareas(): Tarea[] {
        return this.tareas;
    }

    obtenerTareaPorId(id: number): Tarea | undefined {
        return this.tareas.find(tarea => tarea.id === id);
    }

    completarTarea(id: number):boolean{
        const indice = this.tareas.findIndex(tarea => tarea.id === id);
        if(indice !==-1 ){
            this.tareas.splice(indice, 1);
            return true;
        }
        return false;
    }

    filtrarTareasPorPrioridad(prioridad: PrioridadTarea): Tarea[]{
        return this.tareas.filter(tarea => tarea.prioridad === prioridad);
    }

    obtenerTareasCompletadas(): Tarea[]{
        return this.tareas.filter(tarea=> tarea.completada);
    }

    obtenerTareasPendientes(): Tarea[]{
        return this.tareas.filter(tarea=> !tarea.completada);
    }

}

export default GestorTareas;