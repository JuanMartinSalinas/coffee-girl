import React, {useState} from 'react';
import styles from "./Additional.module.css"
import BookList from "../BookList/BookList"
import ToDoList from "../ToDoList/ToDoList"
import Dino from "../Dino/Dino"


function Additional() {

    const [visibility, setVisibility] = useState("todo");

    return (
        <div className={styles.mainBox}>
            <ul>
                <li onClick={() => setVisibility("todo")}>To-do list</li>
                <li onClick={() => setVisibility("book")}>Books</li>
                <li onClick={() => setVisibility("dino")}>Dinogame</li>
            </ul>
            {
                visibility === "book" ? <BookList/> : (visibility === "todo" ? <ToDoList/> : <Dino/>) 
            }
        </div>
    );
}

export default Additional;