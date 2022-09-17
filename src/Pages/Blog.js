import "./Blog.css"
import Article from "../Components/article";
import blogData from "../Data/blogData";
import PostDetails from "../Components/PostDetails";

const Blog = () => {
    console.log(blogData);
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
            <Article />
        </main>
     );
}
 
export default Blog;