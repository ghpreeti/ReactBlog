import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BlockList = ({ blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props,blogs);
  return (
    <div className="blogList">
        <h2>{title}</h2>
        {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
       <Link to={`/blogs/${blog.id}`}>
       <h2>{ blog.title }</h2>
       <p>Written by { blog.author }
       </p>
       </Link>

        </div>
      ))}
    </div>
  );
}

export default BlockList
