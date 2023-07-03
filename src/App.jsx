/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NotFoundPage from './components/Error404/Error404';

const email = 'santi@gmail.com';
const password = '123456';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   let [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {

      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {
            location.pathname !== '/' &&
             <Nav onSearch={onSearch}  setAccess={setAccess} />
            
         }
         
         

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<NotFoundPage />}/>
         </Routes>

         

      </div>
   );
}

export default App;
