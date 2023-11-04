import {Link, NavLink} from 'react-router-dom';

function Navbar() {
    return(
    <div> 
        <ul className='navbar'>
            <li><NavLink className="navbar-link" to="/" >Home</NavLink></li>
            <li><NavLink className="navbar-link" to="/about" >About</NavLink></li>
            <li><NavLink className="navbar-link" to="/contact" >Contact</NavLink></li>
            
        </ul>
    </div>
    )
}

export default Navbar