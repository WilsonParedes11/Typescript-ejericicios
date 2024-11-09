type Tarea = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: Tarea) => {
    return (
        <div>
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar Tarea</button>
        </div>
    )
}