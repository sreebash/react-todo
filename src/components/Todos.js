import React from 'react';
import Todo from "./Todo";

import style from "../css/todos.css";

const Todos = (props) => {
    return (
        <section className="todos">
            {
                props.todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
            }
        </section>
    );
};

export default Todos;