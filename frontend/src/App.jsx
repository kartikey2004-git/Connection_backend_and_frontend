/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// stringify : Converting the JavaScript object to a JSON string
// parse:  Parsing the JSON string back to a JavaScript object

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Chai aur kartikey
        </h1>

        <p className="text-center text-gray-500">Total Jokes: {jokes.length}</p>

        <div className="space-y-4">
          {jokes.map((joke) => (
            <div
              key={joke.id}
              className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium text-gray-700">
                {joke.title}
              </h3>
              <p className="text-gray-600 mt-1">{joke.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App