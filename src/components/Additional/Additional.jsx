import React from 'react';
import styles from "./Additional.module.css"
import BookList from "../BookList/BookList"

function Additional() {
    return (
        <div className={styles.mainBox}>
            
            <BookList/>
        </div>
    );
}

export default Additional;