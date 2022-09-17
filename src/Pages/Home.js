import "./Home.css"

// IMAGES
import imageHome from "../img/simple-blog.jpg";

// PACKAGES
import { Link } from "react-router-dom";

const Home = () => {
    const addHeaderImage = () => {
    document.querySelector("header").style.backgroundImage = `url(${imageHome})`;
    document.querySelector("header").style.backgroundRepeat = `no-repeat`;
    document.querySelector("header").style.backgroundSize = `cover`;
    document.querySelector("header").style.backgroundPosition = `bottom`;
    document.querySelector("header").style.height = `360px`;
    document.querySelector("header").style.width = `100%`;
    }
    addHeaderImage();
    return ( 
        <main>
            <section className="home-page">
                <h2>Welcome to my<br/>simple Blog</h2>
                <Link to="blog"><button>Go to articles</button></Link>
            </section>
        </main>
     );
}

export default Home;