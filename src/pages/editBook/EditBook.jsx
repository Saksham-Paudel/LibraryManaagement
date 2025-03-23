import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {



  const {id} = useParams()


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



  const response =await  axios.patch("http://localhost:4000/book/" + id,formData)
  
  if(response.status === 200)
  {
    navigate('/book/'+ id)
    alert("edited success")
  }
  else{
    alert("something went wrong")
  }
}


const fetchData =async ()=>{
  const response =await axios.get( `http://localhost:4000/book/${id}`)
  if(response.status === 200)
  {
    setData(response.data.data)
  }
}

useEffect(()=>{
  fetchData()
},[])



  return (
    <div>
      <div className="bg-white border border-gray-400 rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md mt-20">

<h2 className="text-2xl font-semibold text-blue-600 mb-6">Edit Book</h2>

<form onSubmit={handeleSubmit} >
    <div className="mb-4">
        <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">Book Name</label>
        <input type="text" id="bookName" name="bookName" value={data.bookName} className="mt-1 p-2 w-full border rounded-md text-gray-800" 
        onChange={handleChange}/>
    </div>
    <div className="mb-4">
        <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">Book Price</label>
        <input type="number" id="bookPrice" name="bookPrice" value={data.bookPrice} className="mt-1 p-2 w-full border rounded-md text-gray-800"
        onChange={handleChange}/>
    </div>
    <div className="mb-6">
        <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">Isbn Number</label>
        <input type="number" id="isbnNumber" name="isbnNumber" value={data.isbnNumber} className="mt-1 p-2 w-full border rounded-md text-gray-800"
        onChange={handleChange}/>
    </div>
    <div className="mb-6">
        <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">Author Name</label>
        <input type="text" id="authorName" name="authorName" value={data.authorName} className="mt-1 p-2 w-full border rounded-md text-gray-800"
        onChange={handleChange}/>
    </div>
    <div className="mb-6">
        <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-600">Published At</label>
        <input type="date" id="publishedAt" name="publishedAt" value={data.PublishedAt} className="mt-1 p-2 w-full border rounded-md text-gray-800"
        onChange={handleChange}/>
    </div>
    <div className="mb-6">
        <label htmlFor="publication" className="block text-sm font-medium text-gray-600">Publication</label>
        <input type="text" id="publication" name="publication" value={data.Publication} className="mt-1 p-2 w-full border rounded-md text-gray-800"
        onChange={handleChange}/>
    </div>
    
    {data.imageUrl && (
          <div className="mb-4">
            <p className="text-gray-600">Current Image:</p>
            <img src={data.imageUrl} alt="Current Book" className="w-32 h-32 object-cover border rounded-md" />
          </div>
        )}

        {/* Upload New Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">New Image</label>
          <input type="file" id="image" name="image" className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setImage(e.target.files[0])} />
        </div>
   
    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Edit Book </button>
</form>
</div>
    </div>
  )
}

export default EditBook
