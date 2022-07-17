import React from 'react';
import style from "../css/todo.css";

const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;
    
    const handleClick = (id) => {
        props.removeTodo(id)
    }
    
    return (
        <article className="todo">
            
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            
            <div>
                <button className="btn" onClick={()=> {handleClick(id)}}><i className="fa fa-trash fa-2x"></i></button>
            </div>
        
        </article>
    );
};

export default Todo;