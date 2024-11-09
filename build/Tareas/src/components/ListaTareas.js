"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaTareas = void 0;
const Tarea_1 = require("./Tarea");
const ListaTareas = ({ listaTareas, borrarTarea }) => {
    return (<div className="tasklist">
            {listaTareas.map((tarea, index) => (<Tarea_1.Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}/>))}
        </div>);
};
exports.ListaTareas = ListaTareas;
