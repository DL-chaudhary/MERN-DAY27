import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"
import Card from './Card';

function Home() {
  const [books,setBooks]=useState([]);

const fetchBooks=async()=>{
       const response=await axios.get("http://localhost:3000/read");
      console.log(response)
         setBooks(response.data.data)
      
       
};

useEffect(()=>{
  fetchBooks();
},[]);
return (
    <>
    <Navbar/>
    <div className='container'>
     {
      books.map(function(data){
        return(<Card/>)
      })
    } 
    </div>
    </>
  )
}

export default Home