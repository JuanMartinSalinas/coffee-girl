import React, {useState} from 'react';
import styles from "./OtherThings.module.css"
import Login from "../Login/Login"
import Background from "../Background/Background"
import Language from "../Language/Language"

import { useLanguageStore } from '../../store';



function OtherThings({toggleProfile, openProfile}) {

    const lang = useLanguageStore(state => state.english)

    const [visibility, setVisibility] = useState("todo");


    return (
        <div className={styles.mainBox}>
            <ul className={styles.sideBar}>
                {/* <li className={visibility === "background" ? styles.sideBarFocus : styles.sideBarNoFocus} onClick={() => setVisibility("background")}>Background</li> */}
                <li className={visibility === "language" ? styles.sideBarFocus : styles.sideBarNoFocus} onClick={() => setVisibility("language")}>Language</li>
                <li className={visibility === "login" ? styles.sideBarFocus : styles.sideBarNoFocus} onClick={() => setVisibility("login")}>Login</li>
            </ul>

            <div>
                <h1>
                    {visibility === "background" ? (lang ? "Background" : "Fondo de pantalla")
                        : (visibility === "language" ? (lang ? "Language" : "Idioma")
                        : (lang ? "Login" : "Inicio de sesión"))
                    }
                </h1>
                {visibility === "background" ? <Background/> : (visibility === "language" ? <Language/> : <Login/>)}
            </div>

            <button className={styles.dialogExit} onClick={() => toggleProfile(!openProfile)}>X</button>
        </div>
    );
}

export default OtherThings;