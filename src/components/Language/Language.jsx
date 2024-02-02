import React, { useState } from 'react';
import styles from "./Language.module.css"
import english from "../../assets/english.png"
import spain from "../../assets/spain.png"

import { useLanguageStore } from '../../store';


function Language() {

    const changeLang = useLanguageStore(state => state.changeLanguage)

    // const [langs, setLangs] = useState(() => {
    //     // getting stored value
    //     const saved = localStorage.getItem("language");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || [];
    // });


    function changeToEnglish() {
        // localStorage.setItem("favorites", JSON.stringify(favs));
        changeLang(true);
    }

    function changeToSpanish() {
        // localStorage.setItem("favorites", JSON.stringify(favs));
        changeLang(false);
    }


    return (
        <div>
            <li>
                <div className={styles.language}>
                    <img className={styles.langImg} onClick={() => changeToEnglish()} src={english}/>
                    <img className={styles.langImg} onClick={() => changeToSpanish()} src={spain}/>
                </div>
            </li>
        </div>
    );
}

export default Language;