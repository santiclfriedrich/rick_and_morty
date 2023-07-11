/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {
   
   const handleOnClose = () => {
      onClose(id.toString())
   }

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav( { id, name, status, species, gender, origin, image, onClose} )
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.divCard}>

      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

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

const mapStateToProps = (state) => {
   return {
      myFavorites : state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch( addFav(character) )},
      removeFav: (id) => { dispatch( removeFav(id) )}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)