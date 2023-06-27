/* eslint-disable react/prop-types */
import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

export default function Cards({characters}) {
   return  <div className={style.divCards}>
      
      {
         characters.map(({ id, name, status, species, gender, origin, image }) => (
         
            <Card 
            key = {id}
            id = {id}
            name = {name}
            status = {status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => alert('Emulamos que se cierra la card')}
            />
            
         ))
      }

   </div>;
}

