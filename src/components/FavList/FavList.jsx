import React, { useState } from 'react';
import styles from "./FavList.module.css"
import { CiCirclePlus } from "react-icons/ci";


function FavList() {

    let favArray = [
        {id:1,name:"youtube",url:"https://www.youtube.com/watch?v=7fusy_xrZ9E",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png"},
        {id:2,name:"twitter",url:"https://twitter.com/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"},
    ];

    const [favs, setFavs] = useState("");

    return favArray.length < 8 ? (
        <div>
            <div className={styles.mainBox}>
                {favArray.map((e) => {
                        return (
                            <a key={e.id} href={e.url}><div className={styles.favBox}>
                                <img className={styles.image} src={e.image} alt={e.name}/>
                            </div></a>
                        );
                    })}
                <div className={styles.favWaitBox}>
                    <CiCirclePlus className={styles.favWaitIcon}/>
                </div>
            </div>
        </div>

    ) : (
        <div className={styles.mainBox}>
            {favArray.map((e) => {
                return (
                    <a href={e.url}><div className={styles.favBox} key={e.id}>
                        <img className={styles.image} src={e.image} alt={e.name}/>
                    </div></a>
                );
            })}
        </div>
);
    

    
}

export default FavList;