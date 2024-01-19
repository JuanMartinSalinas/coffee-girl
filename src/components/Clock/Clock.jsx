import { useState } from 'react';
// import { josefinSans, dancingScript } from '@/app/ui/fonts'

import styles from "./Clock.module.css"

export default function Clock() {

    let date = new Date()

    let hours = date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

    let time = `${hours}:${minutes}`

    const [ctime, setTime] = useState(time);
    const UpdateTime = () => {
        hours = date.getHours();
        minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

        let time = `${hours}:${minutes}`

        setTime(time)
    }
    setInterval(UpdateTime)
    return (
        <div className={styles.clockBox}>
            {ctime}
            <p className={styles.hs}>HS</p>
        </div>
    )

}