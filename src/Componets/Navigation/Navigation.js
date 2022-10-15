import { NavLink } from "react-router-dom";
import './Navigation.scss';
import { FaSearch ,FaCartPlus,FaLemon,FaUser} from "react-icons/fa";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
               <FaLemon/>
            </div>
            <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/test">Products</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to = '/categories/hats'>Hats</NavLink>
            <NavLink to = '/categories/jackets'>Jackets</NavLink>
            </div>
            <div className="icons">
               <span><FaSearch /></span> 
                <span><FaCartPlus /></span>
                <span><FaUser/></span>

            </div>
        </div>
    )
}

export default Navigation