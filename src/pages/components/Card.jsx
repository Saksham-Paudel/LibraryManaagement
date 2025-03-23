
import {Link} from "react-router-dom"
import React from 'react'

const Card = ({book}) => {
  return (
    <>
    <Link to={`/book/${book._id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-10" key ={book._id}>
  <img className="w-full" src={book.imageUrl ? book.imageUrl:"https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-gray-700 text-base">
     Rs.{book.bookPrice}
    </p>
    <p className="text-gray-700 text-base">
     {book.isbnNumber}
    </p>
    <p className="text-gray-700 text-base">
     {book.authorName}
    </p>
    <p>
    <button className="border border-gray-500 hover:bg-orange-500 rounded-xl px-4 py-2">
      {/* <Link to={`/book/${book._id}`}>See More</Link> */}
      See More
      </button>
    </p>
  </div>
 
</div>
</Link>
    </>
  )
}

export default Card
