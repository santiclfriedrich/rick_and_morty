/* eslint-disable react/prop-types */
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link, NavLink} from 'react-router-dom'

const Nav = ( {onSearch, setAccess } ) => {



    const handleSearch = (id) => {
        onSearch(id);
    }

    const handleLogOut = () => {
        setAccess(false);
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

        <button>
            <Link to='/favorites'>Favorites</Link>
        </button>
       
       <button onClick={handleLogOut} >
             Log Out
       </button>

    </div>
    );
};

export default Nav;