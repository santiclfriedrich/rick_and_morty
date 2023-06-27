/* eslint-disable react/prop-types */
import style from './SearchBar.module.css'

export default function SearchBar( {onSearch} ) {
   return (
      <div>
         <input className={style.input} type='search' />
         <button className={style.boton} onClick={onSearch}>Agregar</button> 
      </div>
   );
}
