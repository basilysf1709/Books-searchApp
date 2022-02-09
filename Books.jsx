import React, { useState, useEffect} from 'react'
import axios from 'axios';

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${
                process.env.REACT_APP_BOOKS_API_KEY
            }`);
            setBooks(res.data.results.books);
        }
        fetchBooks();
    }, [])

    return (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
            <div className="parent-book-container">
                {books.slice(0, 6).filter((book) => {
                    if(searchTerm === ""){
                        return book
                    }
                    else if(book.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return book
                    }
                }).map((book) => {
                    const { author, book_image, publisher, rank, title } = book
                    return (
                        <div key={rank} className="book-container">
                            <div className="book-image-container">
                                <img src={book_image} alt={title} />
                            </div>
                            <div className="book-text-container">
                                <h3>{title}</h3>
                                <h4>Rank: {rank}</h4>
                                <h4>Publisher: {publisher}</h4>
                                <h4>Author: {author}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Books
