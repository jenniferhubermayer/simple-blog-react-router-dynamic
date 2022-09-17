import "./Blog.css"
import blogData from "../Data/blogData";
import PostDetails from "../Components/PostDetails";

const Blog = () => {
    // document.querySelector("header").style.backgroundImage = "";
    return ( 
        <main>
            <section className="post-section">
                {blogData.map((post, index) => (
                <PostDetails
                    key={"PostDetails" + index}
                    title={post.title}
                    img={post.img_url}
                    id={post.id}
                    />
                ))}
            </section>
        </main>
     );
}
 
export default Blog;