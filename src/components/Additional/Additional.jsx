import React, {useState} from 'react';
import styles from "./Additional.module.css"
import BookList from "../BookList/BookList"
import ToDoList from "../ToDoList/ToDoList"
import Dino from "../Dino/Dino"
import Newspaper from "../Newspaper/Newspaper"
import arrow from "../../assets/arrow.png"
import { LuListTodo } from "react-icons/lu";
import { FaBook } from "react-icons/fa6";
import { GiDinosaurRex } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";

import { useLanguageStore } from '../../store';

function Additional() {

    const [visibility, setVisibility] = useState("todo");

    const lang = useLanguageStore(state => state.english);

    return (
        <div>
            <div className={styles.textAndArrow}>
                <p className={styles.textArrow}>{lang ? "See more" : "Ver más"}</p>
                <img className={styles.arrow} src={arrow} alt="arrow"/>
            </div>
            <div className={styles.mainBox}>
                <ul>
                    <li className={visibility === "todo" ? styles.liFocus : styles.liNoFocus} onClick={() => setVisibility("todo")}><LuListTodo/> {lang ? "To-do list" : "Cosas por hacer"}</li>
                    <li className={visibility === "news" ? styles.liFocus : styles.liNoFocus} onClick={() => setVisibility("news")}><BsNewspaper /> {lang ? "News" : "Noticias"}</li>
                    <li className={visibility === "book" ? styles.liFocus : styles.liNoFocus} onClick={() => setVisibility("book")}><FaBook/> {lang ? "Books" : "Libros"}</li>
                    <li className={visibility === "dino" ? styles.liFocus : styles.liNoFocus} onClick={() => setVisibility("dino")}><GiDinosaurRex /> {lang ? "Dinogame" : "Dino"}</li>
                </ul>
                {
                    visibility === "book" ? <BookList/> : (visibility === "todo" ? <ToDoList/> : (visibility === "dino" ? <Dino/> : <Newspaper/>))
                }
            </div>
        </div>
    );
}

export default Additional;