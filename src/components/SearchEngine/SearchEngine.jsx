import React from 'react';
import styles from "./SearchEngine.module.css"
import { useState } from "react";

import { FaCoffee  } from "react-icons/fa";

function SearchEngine() {

    const [search, setSearch] = useState('');

    function handleSearch(e) {
        let lowerCase = e.target.value.toLowerCase()
        setSearch(lowerCase);
    }

    // useEffect(() => {
    //     setSearch('');
    // })

    return (
        <div className={styles.mainBox}>

            <div className={styles.imageBox}>
                <img
                    className={styles.image}
                    src="/coffee-girl-logo2.png"
                    alt="coffee girl"/>
            </div>

            <form className={styles.searchBox}>
                <input 
                    className={styles.searchBar}
                    type="search"
                    name="buscar"
                    placeholder="Coffee Coffee Go!"
                    onChange={handleSearch}
                />
                    <button id="myButton" disabled className={styles.button}>
                        <a href={`https://duckduckgo.com/?q=${search}`}> <FaCoffee className={styles.buttonIcon}/></a>
                    </button>                    
            </form>

        </div>
    );
}

export default SearchEngine;