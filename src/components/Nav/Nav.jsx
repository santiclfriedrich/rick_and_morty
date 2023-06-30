/* eslint-disable react/prop-types */
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link, NavLink } from 'react-router-dom'

const Nav = ( {onSearch} ) => {

    const handleSearch = (id) => {
        onSearch(id);
    }

    return(
    <div>
        <SearchBar onSearch={handleSearch} />

        
        <button>
             <Link to='/home' >Home</Link>
             </button>
    

        
        <button>
            <NavLink to='/about' > About </NavLink>
            </button>
       

    </div>
    );
};

export default Nav;