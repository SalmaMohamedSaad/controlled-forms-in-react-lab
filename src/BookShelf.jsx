import { useState } from 'react'

const Bookshelf = () => {
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({ title: '', author: '' })

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooks(() => {
      // I got the idea of using arrow function and returning a new array from AI in order to overcome the problem of not being able to change the book array state on the first submit. AI used the prevBooks expression but I tried to remove it and it worked
      const updatedBooks = [...books, newBook]
      //console.log('Books after submit:', updatedBooks)
      return updatedBooks // Return the updated books array to the book array
    })
    setNewBook({ title: '', author: '' })
  }

  const bookCard = () => {
    // console.log('Books======>', books)
    // console.log('New Book======>', newBook)

    return books.map(
      (
        book,
        index // index to insure each book card is distinct
      ) => (
        <div className="bookCard" key={index}>
          <b>{book.title} </b>
          <br />
          <b>By:</b> {book.author}
        </div>
      )
    )
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Book Title: </label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.length > 0 ? bookCard() : <p>No books added yet.</p>}
        </div>
      </div>
    </>
  )
}

export default Bookshelf
