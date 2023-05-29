import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import axios from 'axios';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import DogDetailsContainer from './DogDetailsContainer';

const DOGS_API_URL = "http://localhost:5001/dogs";

function App() {
  const [dogs, setDogs] = useState(null);

  async function loadDogs() {
    const result = await axios.get(DOGS_API_URL);

    const dogs = result.data.map(dog => ({...dog, id: uuid()}));

    setDogs(dogs);
  }

  if (!dogs) {
    loadDogs();

    return (
      <p>loading dogs...</p>
    );
  }

  return (
    <BrowserRouter>
      <Nav dogs={dogs}/>
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:name" element={<DogDetailsContainer dogs={dogs}/>} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </BrowserRouter>
  );

}



export default App;