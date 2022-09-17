// PACKAGES
import { Link } from "react-router-dom";

const PostDetails = (props) => {
    return ( 
        <article className="blog-post">
            <img src={props.img} />
            <h3>{props.title}</h3>
            <Link to={`/${props.id}`}>
                <button>Read more</button>
            </Link>
      </article>
     );
}
 
export default PostDetails;