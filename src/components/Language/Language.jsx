import React from 'react';
import styles from "./Language.module.css"

import english from "../../assets/english.png"
import spain from "../../assets/spain.png"

import { useLanguageStore } from '../../store';


function Language() {

    const changeLang = useLanguageStore(state => state.changeLanguage)



    return (
        <div>
            <li>
                <div className={styles.language}>
                    <img className={styles.langImg} onClick={changeLang} src={english}/>
                    <img className={styles.langImg} onClick={changeLang} src={spain}/>
                </div>
            </li>
        </div>
    );
}

export default Language;