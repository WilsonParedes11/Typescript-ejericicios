"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoApp = void 0;
const react_1 = require("react");
const ListaTareas_1 = require("./ListaTareas");
const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = (0, react_1.useState)('');
    const [listaTareas, setListaTareas] = (0, react_1.useState)([]);
    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') {
            return;
        }
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
        setNuevaTarea('');
    };
    const handleBorrarTarea = (index) => {
        setListaTareas(tareasAnteriores => tareasAnteriores.filter((_, i) => i !== index));
    };
    return (<div>
            <h1>Lista de Tareas</h1>
            <div>
                <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Escribe una tarea"/>
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas_1.ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}/>
        </div>);
};
exports.TodoApp = TodoApp;
