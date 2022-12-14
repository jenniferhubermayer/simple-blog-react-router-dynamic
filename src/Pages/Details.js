import "./Details.css"

// DATA IMPORT
import blogData from "../Data/blogData";

// PACKAGES
import { useParams } from "react-router-dom"; 

// ----------------- DETAILS PAGE -----------------
const Details = () => {
    const srollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    srollToTop();
    let params = useParams();
    let post = blogData[params.id];
    return ( 
        <main>
            <section className="post">
                <img src={post.img_url} alt="" />
                <div className="post-details">
                    <div className="post-details-title">
                        <h2>{post.title}</h2>
                        <h3>{post.published_date}</h3>
                    </div>
                    <p>{post.description}</p>
                    <p className="post-details-author">By {post.author}</p>
                </div>
            </section>
        </main>
    );
}

export default Details;