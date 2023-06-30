import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/Error404/Error404';

function App() {

   let [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

const onClose = (id) => {
   const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
   setCharacters(filteredCharacters);
}

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<NotFoundPage />}/>
         </Routes>

         

      </div>
   );
}

export default App;
