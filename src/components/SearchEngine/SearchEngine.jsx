import React from 'react';
import styles from "./SearchEngine.module.css"
import { useState } from "react";

import { FaCoffee  } from "react-icons/fa";

function SearchEngine() {

    const [search, setSearch] = useState('');

    function handleSearch(e) {
        let lowerCase = e.target.value
        setSearch(lowerCase);
    }

    return (
        <div className={styles.mainBox}>

            <div className={styles.imageBox}>
                <img
                    className={styles.image}
                    src="/coffee-girl-logo2.png"
                    alt="coffee girl"/>
            </div>

            <form className={styles.searchBox} action={`https://duckduckgo.com/?q=${search}`}>
                <input 
                    className={styles.searchBar}
                    autoComplete='off'
                    type="search"
                    name="q"
                    placeholder="Coffee Coffee Go!"
                    onChange={handleSearch}
                />
                <button id="myButton" disabled={search ? false : true} className={styles.button}>
                    <FaCoffee className={styles.buttonIcon}/>
                </button>                    
            </form>

        </div>
    );
}

export default SearchEngine;