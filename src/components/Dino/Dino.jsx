import React from 'react';
import styles from "./Dino.module.css"

function Dino() {

    return (
        <div className={styles.mainBox}>
            <h1 className={styles.title}>Coffee run</h1>
            <canvas className={styles.board}>

            </canvas>
        </div>
    );
}

export default Dino;