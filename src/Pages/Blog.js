import "./Blog.css"

// DATA IMPORT
import blogData from "../Data/blogData";

// COMPONENTS
import PostDetails from "../Components/PostDetails";

// ----------------- BLOG PAGE -----------------
const Blog = () => {
    const removeHeaderImage = () => {
        document.querySelector("header").style.backgroundImage = ``;
        document.querySelector("header").style.backgroundRepeat = ``;
        document.querySelector("header").style.backgroundSize = ``;
        document.querySelector("header").style.backgroundPosition = ``;
        document.querySelector("header").style.height = ``;
        }
        removeHeaderImage();    
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