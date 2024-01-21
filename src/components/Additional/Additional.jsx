import React, {useState} from 'react';
import styles from "./Additional.module.css"
import BookList from "../BookList/BookList"
import ToDoList from "../ToDoList/ToDoList"
import Dino from "../Dino/Dino"
import arrow from "../../assets/arrow.png"
import { LuListTodo } from "react-icons/lu";
import { PiBookThin } from "react-icons/pi";
import { GiDinosaurBones } from "react-icons/gi";


function Additional() {

    const [visibility, setVisibility] = useState("todo");

    return (
        <div>
            <div className={styles.textAndArrow}>
                <p className={styles.textArrow}>See more</p>
                <img className={styles.arrow} src={arrow} alt="arrow"/>
            </div>
            <div className={styles.mainBox}>
                <ul>
                    <li onClick={() => setVisibility("todo")}><LuListTodo/> To-do list</li>
                    <li onClick={() => setVisibility("book")}><PiBookThin/> Books</li>
                    <li onClick={() => setVisibility("dino")}><GiDinosaurBones/> Dinogame</li>
                </ul>
                {
                    visibility === "book" ? <BookList/> : (visibility === "todo" ? <ToDoList/> : <Dino/>) 
                }
            </div>
        </div>
    );
}

export default Additional;