/* eslint-disable react/prop-types */
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   
   const handleOnClose = () => {
      onClose(id.toString())
   }

   return (
      <div className={style.divCard}>
         <img src={image} alt='imagen' /> 
          <button className={style.cross} onClick={handleOnClose}>X</button>
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         
      </div>
   );
}
