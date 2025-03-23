import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Await, Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {


  const navigate = useNavigate()   //for navigating to home page if ('/')

  const {id} = useParams()
  const [book,setBook] = useState({})


  const fetchBooks = async ()=>{
    const response = await axios.get(`http://localhost:4000/book/${id}`)  //`http://http://localhost:4000/book/${id}` 
console.log(response)
    if(response.status === 200)
    {
      setBook(response.data.data)
    }
  }


  const deleteFunction =async ()=>{
    const response =await axios.delete("http://localhost:4000/book/" +id )
    if(response.status === 200)
    {
      alert("Book deleted succcessfully")
      navigate('/')
    }
  }



  useEffect(()=>{
    fetchBooks()
  },[id])


  return (
    <>
      <Navbar/>


      
  <img className="w-[600px] h-[550px]" src={book.imageUrl ? book.imageUrl:"https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"} />
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
      <button className="border border-gray-500 hover:bg-orange-500 rounded-xl px-4 py-2" onClick={deleteFunction}>Delete</button>

      <Link to= {`/editBook/${book._id}`}>
      <button className="border border-gray-500 hover:bg-orange-500 rounded-xl px-4 py-2 ml-3" >Edit</button>
      </Link>
    </p>

  </div>
    </>
  )
}

export default SingleBook
