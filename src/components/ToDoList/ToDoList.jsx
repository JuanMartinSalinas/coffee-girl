import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from "./ToDoList.module.css"
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

uuidv4();

function ToDoList() {

    const [value, setValue] = useState('');
    const [todos, setTodo] = useState([]);

    function addTodo(todo) {
        setTodo([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
        console.log(todos);
        setValue("");
    }
    function deleteTodo(id) {
        setTodo(todos.filter((todo)=> todo.id !== id))
    }
    function editTodo(id) {
        setTodo(todos.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo))
    }
    function toggleComplete(id) {
        // console.log(id);
        setTodo(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo))
        console.log(todos);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };

    return (
        <div className={styles.mainBox}>
            <div className={styles.insideBox}>
                <h1>To-do List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className=""
                        name="buscar"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                    <button disabled={value ? "" : "disabled"}>Add</button>                   
                </form>
                <div className={styles.taskBoxes}>
                    {
                        todos.map((todo,index) => (
                            <div key={index} className={todo.completed === false ? styles.taskBox : styles.noTaskBox}>
                                {todo.isEditing === false ?
                                    <div className={styles.tasks}>
                                        <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>        
                                        <button onClick={() => editTodo(todo.id)}>
                                            <FaEdit />
                                        </button>
                                        <button onClick={() => deleteTodo(todo.id)}>
                                            <FaRegTrashCan/>                                    
                                        </button>
                                    </div>                              
                                    :
                                    <div>
                                        <input
                                            placeholder={todo.task}
                                        />    
                                        <button onClick={() => editTodo(todo.id)}>
                                            <FaEdit />
                                        </button>
                                    </div>
                                }
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ToDoList;