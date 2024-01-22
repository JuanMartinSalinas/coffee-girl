import React, { useEffect, useState } from 'react';
import styles from "./BookList.module.css"
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


const URL = "https://openlibrary.org/search.json?title="

function BookList() {

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [resultTitle, setResultTitle] = useState('');
    const [favs, setFavs] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("favorites");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    function favHandler(book) {

        for(let fav of favs) {
            if(fav.id === book.id) {
                return;
            }
        }

        setFavs([...favs, book])
        localStorage.setItem("favorites", JSON.stringify(favs));
    }
    function favRemover(book) {
        let updatedFavorites = favs.filter((fav) => fav.id !== book.id);
        setFavs(updatedFavorites);
      };
    function searchHandler(e) {
        e.preventDefault();
        // document.getElementById("bookInput").value = "";
        setSearchTerm(e.target.value);
    };
    async function fetchBooks() {
        try {
            
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const docs = data.docs;
            const finalBooks = docs.filter((book) => book.author_name && book.cover_i && book.title.length < 50)
        
            if(finalBooks) {
                const newBooks = finalBooks.map((bookSingle) => {
                    const {key,author_name,cover_i,edition_count,first_publish_year,title} = bookSingle
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title:title,
                    }
                });                
                setBooks(newBooks);                
                newBooks.length > 1 ? setResultTitle('Your search results:') : setResultTitle('No search result.') 
            } else {
                setBooks([]);
                setResultTitle('No search result.');
            }
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || ["cum"];
        setFavs(storedFavorites);
    },[]) 
    useEffect(() => {
        // storing input name
        localStorage.setItem("favorites", JSON.stringify(favs));
      }, [favs]);

    return (
        <div className={styles.mainBox}>
            
            <div className={styles.favList}>
                {favs.length > 0 ? (
                    <h1 className={styles.bookSectionTitle}>Books yet to read</h1>
                ) : null}
                <div className={favs.length > 0 ? styles.bookBox : styles.bookBoxHidden}>
                    {favs?.map((e) => {
                        return (
                            <div className={styles.fetchedBooks} key={e.id}>
                            <img className={styles.bookImage} src={`https://covers.openlibrary.org/b/id/${e.cover_id}-L.jpg`} alt={e.title}/>
                            <div className={styles.bookImageInfo}>
                                <h3 className={styles.bookTitle}>{e.title}</h3>
                                <p className={styles.bookAuthor}>{e.author}</p>
                                <button className={styles.deleteFavs} onClick={() => {favRemover(e)}}><MdDeleteForever/></button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.searchBooks}>
                <div className={styles.searchTools}>
                    <h1 className={styles.bookSectionTitle}>Search your book</h1>
                    <div className={styles.pseudoForm}>
                        <input
                            id="bookInput"
                            className={styles.bookInput}
                            type="search"
                            name="buscar"
                            placeholder="The Way of Kings..."
                            onChange={(e) => searchHandler(e)}
                        />
                        <button className={styles.bookButton} disabled={searchTerm ? false : true} onClick={() => fetchBooks()}>Search</button>
                    </div>
                </div>

                <p>{resultTitle}</p>

                <div className={styles.bookBox}>
                    {books.map((e) => {
                        return (
                            <div className={styles.fetchedBooks} key={e.id}>
                                <img className={styles.bookImage} src={`https://covers.openlibrary.org/b/id/${e.cover_id}-L.jpg`} alt={e.title}/>
                                <div className={styles.bookImageInfo}>
                                    <h3 className={styles.bookTitle}>{e.title}</h3>
                                    <p className={styles.bookAuthor}>{e.author}</p>
                                    <button className={styles.addToFavs} onClick={() => {favHandler(e)}}><MdFormatListBulletedAdd/></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>            
 
        </div>
    );
}

export default BookList;