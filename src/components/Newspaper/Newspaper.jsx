import React, {useEffect, useMemo, useState} from 'react';
import styles from "./Newspaper.module.css"
import { useLanguageStore } from '../../store';

function Newspaper() {

    const [nius, setNius] = useState([]);

    const lang = useLanguageStore(state => state.english);
    const finalLang = lang ? "en" : "es";

    async function fetchNews() {
        try {
            const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_3688026ca9bce4d7a8f410d0e21a5943a2559&language=${finalLang}`)
            const news = await response.json();
            const remember = news.results;
            setNius(remember);
    } catch (error) {
        console.log(error)
        }
    };

    useEffect(() => {
        fetchNews();
    },[])

    return (
        <div className={styles.mainBox}>
            <h1 className={styles.newspaperTitle}>{lang ? "Today's news" : "Las noticias de hoy"}</h1>
            <div className={styles.newsBox}>                
                {nius.map((e) => {
                    return (
                        <div className={styles.allNews} key={e.article_id}>
                            <h2>{e.title}</h2>
                            <h3>By {e.creator} | {e.pubDate}</h3>
                            {e.image_url ? <img className={styles.image} src={e.image_url} alt={e.title}/> : ""}
                            <p>{e.description}</p>
                            <a className={styles.link} target="_blank" href={e.link}>{lang ? "See more" : "Ver más"}</a>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Newspaper;