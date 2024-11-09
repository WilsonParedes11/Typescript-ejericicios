"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./styles.css");
const TodoApp_1 = require("./components/TodoApp");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
   <TodoApp_1.TodoApp />
  </react_1.StrictMode>);
