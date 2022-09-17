import blogData from "../Data/blogData";
import { useParams } from "react-router-dom"; 

const Details = () => {
    let params = useParams();
    let post = blogData[params.id];
    console.log(params.id);
    return ( 
        <main>
            <img src={post.img_url} alt="" />
            <h2>{post.title}</h2>
            <h2>{post.published_date}</h2>
            <p>{post.description}</p>
            <h2>{post.author}</h2>
        </main>
     );
}
 
export default Details;