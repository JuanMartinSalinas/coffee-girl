import React, { useState } from 'react';
import styles from "./FavList.module.css"
import { CiCirclePlus } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";



import { v4 as uuidv4 } from 'uuid';

uuidv4();

function FavList() {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [favs, setFavs] = useState([]);
    const [openTab, setOpenTab] = useState(false);

    function addFavorite(fav, name) {
        let favicon = `https://${fav}/favicon.ico`
        setFavs([...favs, {id:uuidv4(), name:name, url:`https://${fav}`,image:favicon}]);
        setValue("");
        setName("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        addFavorite(value, name);
        setValue('');
        setOpenTab(!openTab)
    }

    function deleteFavorite(id) {
        setFavs(favs.filter((fav) => fav.id !== id))

    }

    return favs.length < 8 ? (
        <div>
            <div className={styles.mainBox}>
            
                {favs.map((e) => {
                        return (
                            <div key={e.id}>
                                <button styles={styles.deleteButton} onClick={() => deleteFavorite(e.id)} >
                                    <TiDeleteOutline />
                                </button>
                                
                                <a target="_blank" href={e.url}>
                                    <div className={styles.favBox}>
                                        <img className={styles.image} src={e.image} alt={e.name}/>
                                    </div>
                                    <p className={styles.name}>{e.name}</p>
                                </a>

                            </div>
                        );
                    })
                }
                
                <div className={styles.favWaitBox}>
                    <button className={styles.editButton} onClick={() => setOpenTab(!openTab)}>
                        <CiCirclePlus className={styles.favWaitIcon}/>
                    </button>
                </div>

                <dialog className={styles.favDialog} open={openTab}>
                    <button onClick={() => setOpenTab(!openTab)}>X</button>
                    <form onSubmit={handleSubmit}>
                        <p>Adding fav</p>
                        https:// <input
                            type="text"
                            onChange={e => setValue(e.target.value)}
                            value={value}
                        />
                        Name <input
                            type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <button type="submit" disabled={name && value ? false : true}>Add</button>
                    </form>
                </dialog>
            
            </div>
        </div>

    ) : (
        <div className={styles.mainBox}>
            {favs.map((e) => {
                    return (
                        <div>
                            <a key={e.id} href={e.url}><div className={styles.favBox}>
                                <img className={styles.image} src={e.image} alt={e.name}/>
                            </div>
                            <p className={styles.name}>{e.name}</p></a>
                        </div>
                    );
                })
            };
        </div>
);
    

    
}

export default FavList;