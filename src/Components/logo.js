import "./logo.css"

// PACKAGES
import { Link } from "react-router-dom"; 

const Logo = () => {
    return ( 
        <div className="logo">
            <Link to="/">
                <h1>My Life</h1>
            </Link>
        </div>
     );
}
 
export default Logo;