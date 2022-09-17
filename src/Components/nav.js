import "./nav.css"

// PACKAGES
import { Link } from "react-router-dom"; 

// ----------------- NAVIGATION COMPONENT -----------------
const Nav = () => {
    return ( 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="blog">Blog</Link></li>
            </ul>
        </nav>
     );
}
 
export default Nav;