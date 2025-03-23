import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {

  const [books,setBooks] = useState([])
  
  
  const fetchBooks = async ()=>{

    const response = await axios.get('http://localhost:4000/book')
    
    if(response.status === 201)
    {
      setBooks(response.data.data)
    }
    
  }
 

  useEffect(()=>{
    fetchBooks()
  },[])

  
  
  return (
    <>

   <Navbar/>

   <div className ="flex flex-wrap justify-evenly mt-20">

   {
    books.length > 0 && books.map((book)=>{
      return (
        <Card book ={book} /> 
      )
    })
   }

   </div>
    </>
  )
}

export default Home
