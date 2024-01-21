import React, { useState,useEffect } from 'react';
import styles from "./FavList.module.css"
import { CiCirclePlus } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';

uuidv4();

function FavList() {  

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [favs, setFavs] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("browserFavs");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });
    const [openTab, setOpenTab] = useState(false);

    async function addFavorite(fav, name) {

        const favicon = `https://www.google.com/s2/favicons?domain=${fav}&sz=128`
        
        setFavs([...favs, {id:uuidv4(), name:name, url:`https://${fav}`,image:favicon}]);
        setValue("");
        setName("");
        localStorage.setItem("browserFavs", JSON.stringify(favs));
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

    useEffect(() => {
        let storedFavorites = JSON.parse(localStorage.getItem("browserFavs")) || ["cummy"];
        setFavs(storedFavorites);
        // console.log(storedFavorites);
    },[]) 

    useEffect(() => {
        // storing input name
        localStorage.setItem("browserFavs", JSON.stringify(favs));
      }, [favs]);

    return favs.length < 14? (
        <div>
            <div className={styles.mainBox}>
            
                {favs.map((e) => {
                        return (
                            <div className={styles.fullFav} key={e.id}>
                                <button className={styles.deleteButton} onClick={() => deleteFavorite(e.id)} >
                                    <TiDeleteOutline className={styles.deleteButtonIcon}/>
                                </button>
                                
                                <a className={styles.favButton} target="_blank" href={e.url}>
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
                    <button className={styles.dialogExit} onClick={() => setOpenTab(!openTab)}>X</button>
                    <h3 className={styles.dialogTitle}>Add a new site</h3>
                    <form className={styles.dialogForm} onSubmit={handleSubmit}>
                        <label className={styles.textInput}>URL</label>
                            <input
                                placeholder="https://..."
                                className={styles.dialogInput}
                                type="text"
                                onChange={e => setValue(e.target.value)}
                                value={value}
                            />
                        <label className={styles.textInput}>Name</label>
                            <input
                                placeholder="Your site's name..."
                                className={styles.dialogInput}
                                type="text"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        <div className={styles.dialogButtons}>
                            <button className={styles.cancelDialogButton} type="button" onClick={() => setOpenTab(!openTab)}>Cancel</button>
                            <button className={styles.addDialogButton} type="submit" disabled={name && value ? false : true}>Add site</button>
                        </div>
                    </form>
                </dialog>
            
            </div>
        </div>

    ) : (
        <div className={styles.mainBox}>
            {favs.map((e) => {
                    return (
                        <div className={styles.fullFav} key={e.id}>
                            <button className={styles.deleteButton} onClick={() => deleteFavorite(e.id)} >
                                <TiDeleteOutline className={styles.deleteButtonIcon}/>
                            </button>
                            
                            <a className={styles.favButton} target="_blank" href={e.url}>
                                <div className={styles.favBox}>
                                    <img className={styles.image} src={e.image} alt={e.name}/>
                                </div>
                                <p className={styles.name}>{e.name}</p>
                            </a>

                        </div>
                    );
                })
            };
        </div>
);
    

    
}

export default FavList;