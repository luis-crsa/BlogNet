import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Maria Fernanda', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Paulo Henrique', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Luís Cláudio', id: 3 }
      ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;