/* eslint-disable react/prop-types */
import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar( {onSearch} ) {

   let [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value)
   }



   return (
      <div>
         <input className={style.input} type='search' value={id} onChange={handleChange} placeholder='ID...' />
         <button className={style.boton} onClick={() => {onSearch(id); setId('')} }>Agregar</button> 
      </div>
   );
}
