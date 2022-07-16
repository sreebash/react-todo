import React, {useState} from 'react';
import Todos from "./Todos";
import style from "../css/home.css";
import NewTodo from "./NewTodo";


const Home = () => {
    
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {todo}]
        })
    }
    
    return (
        <div className="container">
            <h1 style={{color: "white"}}>Todo App</h1>
            <NewTodo addTodo={addTodo}/>
            
            <Todos todos={todos}/>
        </div>
    );
};

export default Home;