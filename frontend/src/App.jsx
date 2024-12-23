import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const[jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error); 
    })
  },[])

  return (
    <>
    <h1>Chai aur kartikey</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
