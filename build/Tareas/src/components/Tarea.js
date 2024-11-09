"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const Tarea = ({ tarea, borrarTarea }) => {
    return (<div>
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar Tarea</button>
        </div>);
};
exports.Tarea = Tarea;
