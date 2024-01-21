import React, { useEffect, useState } from 'react';
import styles from "./BookList.module.css"

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
        console.log(storedFavorites)
    },[]) 

    useEffect(() => {
        // storing input name
        localStorage.setItem("favorites", JSON.stringify(favs));
      }, [favs]);

    return (
        <div className={styles.mainBox}>
            
            <div className={styles.favList}>
                <h1 className={styles.bookSectionTitle}>Books yet to read</h1>
                {favs?.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.title}</p>
                            <p>{e.author}</p>
                            <img className={styles.bookImage} src={`https://covers.openlibrary.org/b/id/${e.cover_id}-L.jpg`} alt={e.title}/>
                            <button onClick={() => {favRemover(e)}}>Delete</button>
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
                <p>{resultTitle}</p>

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