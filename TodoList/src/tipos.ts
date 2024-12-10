enum PrioridadTarea{
    Baja,
    Media, 
    Alta
}

interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    prioridad: PrioridadTarea;
    completada: boolean;
}

export {Tarea, PrioridadTarea};