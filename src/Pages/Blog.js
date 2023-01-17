import React, { useState } from 'react';
import './Pages.css'
import { Link} from 'react-router-dom';
import { blogData } from '../FakeData';

const Blog = () => {
    const [blogs,setBlogs] = useState(blogData);
    const truncateString = (str,num) =>{
        if (str.length > num){
            return str.slice(0,num) + '...';
        }else{
            return str
        }
    }
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
            {
                blogs.map((data) =>{
                    const {id,name,body} = data;
                    return(
                    <article key={id}>
                      <h1>{name}</h1>
                      {/* <p>{body}</p> */}
                      <p>{truncateString(body,100)}</p>
                      <Link to={name} state={{id,name,body} }>learn more</Link>
                    </article>
                )
                })
            }
            </section>
        </div>
    );
};

export default Blog;