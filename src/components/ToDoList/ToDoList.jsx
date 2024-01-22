import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from "./ToDoList.module.css"
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

uuidv4();

function ToDoList() {

    const [value, setValue] = useState('');
    const [todos, setTodo] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("todo");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });

    function addTodo(todo) {
        setTodo([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
        setValue("");
        localStorage.setItem("todo", JSON.stringify(todos));
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
    }
    function handleSubmit(e) {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };

    useEffect(() => {
        let storedToDo = JSON.parse(localStorage.getItem("todo")) || [];
        setTodo(storedToDo);
    },[]) 
    useEffect(() => {
        // storing input name
        localStorage.setItem("todo", JSON.stringify(todos));
      }, [todos]);

    return (
        <div className={styles.mainBox}>
            <div className={styles.insideBox}>
                <h1>To-do List</h1>
                <form className={styles.pseudoForm} onSubmit={handleSubmit}>
                    <input
                        className={styles.toDoInput}
                        name="buscar"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                    <button className={styles.toDoButton} disabled={value ? "" : "disabled"}>New task</button>                   
                </form>
                <div className={styles.taskBoxes}>
                    {
                        todos.map((todo,index) => (
                            <div key={index} className={todo.completed === false ? styles.taskBox : styles.noTaskBox}>
                                {todo.isEditing === false ?
                                    <div className={styles.tasks}>
                                        <p className={styles.taskTextBox} onClick={() => toggleComplete(todo.id)}>{todo.task}</p>        
                                        <div className={styles.taskButtons}>
                                            <button className={styles.toDoButtons}onClick={() => editTodo(todo.id)}>
                                                <FaEdit />
                                            </button>
                                            <button className={styles.toDoButtons} onClick={() => deleteTodo(todo.id)}>
                                                <FaRegTrashCan/>                                    
                                            </button>
                                        </div>
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