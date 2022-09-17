import "./Home.css"

// IMAGES
import imageHome from "../img/simple-blog.jpg";

// PACKAGES
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <main>
            <img src={imageHome} alt="simple blog"/>
            <section className="home-page">
                <h2>Welcome to my<br/>simple Blog</h2>
                <Link to="blog"><button>Go to articles</button></Link>
            </section>
        </main>
     );
}

export default Home;