import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [jokes,setjokes]=useState([]);

  // /.  http://localhost:4000/jokes

  useEffect(()=>{
    axios.get("api/jokes")
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  },[])

  return (
    <>
      <h1>Welcome to My Website</h1>
      <p>jokes :{jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={index}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        )

        )
      }
    </>
  )
}

export default App
