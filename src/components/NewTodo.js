import React, {useState} from 'react';

import style from "../css/newtodo.css";

const NewTodo = (props) => {
    
    const [todo, setTodo] = useState({title: "", desc: ""});
    const {title, desc} = todo;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodo({title: "", desc: ""})
        props.addTodo(todo)
    }
    
    const handleChange = (event) => {
        const name = event.target.name
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        })
    }
    
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <label htmlFor="title">Description</label>
                    <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange}/>
                </div>
                <button type="submit">Add todo</button>
            
            </form>
        </div>
    );
};

export default NewTodo;