import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const AddBook = () => {


//   const [bookName,setBookName] = useState('')
//   const [bookPrice,setBookPrice] = useState('')
//   const [isbnNumber,setIsbnNumber] = useState(null)
//   const [publishedAt,setPublishedAt] = useState('')
//   const [authorName,setAuthorName] = useState('')
//   const [publication,setPublication] = useState('')
//   const [image,setImage] = useState(null)


// const handeleSubmit =async (e)=>{
// //     e.preventDefault()
//     const response = await axios.post("http://localhost:4000/book",{
//     bookName,
//     bookPrice,
//     isbnNumber,
//     publishedAt,
//     authorName,
//     publication,
//     image
//   },{
//     headers : {
//       'Content-Type' : 'multipart/form-data'   //header chai image send garna ko lai halnai parxa yesko alternative vana ko                                                                                                             form-data ho
//     }
//   })
// }

const navigate =useNavigate()

const [data,setData] = useState({
  bookName : '',
  bookPrice : '',
  isbnNumber : '',
  authorName : '',
  PublishedAt : '',
  Publication : '',
})



const [image,setImage] = useState('')   // file haru ko lagi different usestate banunu parxa



const handleChange = (e)=>{
  const {name,value} = e.target
  setData({
    ...data,
    [name] : value
  })
}



const handeleSubmit = async (e)=>{

  e.preventDefault()        // it is used to prevent the url ma ako kura haru  



  const formData = new FormData()

  //yetimaly mathi ko data variable ma ako data lai send garxa
  const arrays = Object.entries(data)  // convert the above data into arrays. so that loop launa sajilo hos
  arrays.forEach(([key,value])=>{
    formData.append(key,value)//formdata append lay chai postman ma form-data ma send garthis tesko kam garxaFOR file & jsondata 
  })
  formData.append('image',image)



  const response =await  axios.post("http://localhost:4000/book",formData)
  console.log(response)
  if(response.status === 201)
  {
    navigate('/')
  }
  else{
    alert("something went wrong")
  }
}





  return (
    <>
      <Navbar/>

      <div className="bg-white border border-gray-400 rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md mt-20">

        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>

        <form onSubmit={handeleSubmit} >
            <div className="mb-4">
                <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">Book Name</label>
                <input type="text" id="bookName" name="bookName" className="mt-1 p-2 w-full border rounded-md text-gray-800" 
                onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">Book Price</label>
                <input type="number" id="bookPrice" name="bookPrice" className="mt-1 p-2 w-full border rounded-md text-gray-800"
                onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">Isbn Number</label>
                <input type="number" id="isbnNumber" name="isbnNumber" className="mt-1 p-2 w-full border rounded-md text-gray-800"
                onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">Author Name</label>
                <input type="text" id="authorName" name="authorName" className="mt-1 p-2 w-full border rounded-md text-gray-800"
                onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-600">Published At</label>
                <input type="date" id="publishedAt" name="publishedAt" className="mt-1 p-2 w-full border rounded-md text-gray-800"
                onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="publication" className="block text-sm font-medium text-gray-600">Publication</label>
                <input type="text" id="publication" name="publication" className="mt-1 p-2 w-full border rounded-md text-gray-800"
                onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="Image" className="block text-sm font-medium text-gray-600">Image</label>
                <input type="file" id="Image" name="Image" className="mt-1 p-2 w-full border rounded-md text-gray-800"
                onChange={(e)=> setImage(e.target.files[0])}/>
            </div>
           
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Book </button>
        </form>
    </div>

    </>
  )
}

export default AddBook
