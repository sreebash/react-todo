import React, {useState} from 'react';
import Todos from "./Todos";
import style from "../css/home.css";
import NewTodo from "./NewTodo";
import {v4 as uuidv4} from "uuid";

const Home = () => {
    
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}]
        });
        console.log(todos);
    
    }
    
    const handleRemoveTodo = (id) => {
        alert(id)
    };
    return (
        <div className="container">
            <h1 style={{color: "white"}}>Todo App</h1>
            <NewTodo addTodo={addTodo}/>
            
            <Todos todos={todos} removeTodo={handleRemoveTodo}/>
        </div>
    );
};

export default Home;