import React, { useState } from 'react';
import styles from "./BookList.module.css"
import { useFavoriteStore } from '../../store';

const URL = "https://openlibrary.org/search.json?title="

function BookList() {

    const favs = useFavoriteStore(state => state.favoriteBooks)
    const addFavs = useFavoriteStore(state => state.addFavorites)

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [resultTitle, setResultTitle] = useState('');

    function favHandler() {
        addFavs();
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

    return (
        <div className={styles.mainBox}>
            
            <div className={styles.favList}>
                <h1 className={styles.bookSectionTitle}>Books yet to read</h1>
                {favs.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.title}</p>
                            <p>{e.author}</p>
                            <img className={styles.bookImage} src={`https://covers.openlibrary.org/b/id/${e.cover_id}-L.jpg`} alt={e.title}/>
                            <button onClick={() => {favHandler(e)}}>Add</button>
                        </div>
                    )
                })}
            </div>

            <div className={styles.searchBooks}>
                <div className={styles.searchTools}>
                    <h1 className={styles.bookSectionTitle}>Search your book</h1>
                    <input
                        id="bookInput"
                        className={styles.bookInput}
                        type="search"
                        name="buscar"
                        placeholder="The Way of Kings..."
                        onChange={(e) => searchHandler(e)}
                    />
                    <button onClick={() => fetchBooks()}>Search</button>
                </div>

                {/* <p>{resultTitle}</p> */}

                <div className={styles.bookBox}>
                    {books.map((e) => {
                        return (
                            <div key={e.id}>
                                <p>{e.title}</p>
                                <p>{e.author}</p>
                                <img className={styles.bookImage} src={`https://covers.openlibrary.org/b/id/${e.cover_id}-L.jpg`} alt={e.title}/>
                                <button onClick={() => {favHandler(e)}}>Add</button>
                            </div>
                        )
                    })}
                </div>
            </div>            
 
        </div>
    );
}

export default BookList;