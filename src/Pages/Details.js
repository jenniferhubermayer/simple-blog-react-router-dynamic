import "./Details.css"
import blogData from "../Data/blogData";
import { useParams } from "react-router-dom"; 

const Details = () => {
    window.scroll = "top";
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
                    <p className="post-details-author">{post.author}</p>
                </div>
            </section>
        </main>
     );
}
 
export default Details;