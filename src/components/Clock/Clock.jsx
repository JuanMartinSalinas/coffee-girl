import { useState, useEffect } from 'react';
import styles from "./Clock.module.css"

export default function Clock() {
    const [ctime, setTime] = useState(getCurrentTime());

    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return `${hours}:${minutes}`;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.clockBox}>
            {ctime}
            <p className={styles.hs}>HS</p>
        </div>
    );
}
