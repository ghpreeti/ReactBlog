import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import userFetch from './userFetch';

const BlogDetails = () => {
    const{id} = useParams();
    const {data:blogs,error,isPending} = userFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

const handleClick=() => {
    fetch('http://localhost:8000/blogs/'+ blogs.id, {
        method: 'DELETE',
    }).then(()=>{
     history.push('/');
    })
}


  return (
<div className="blog-details">
    {isPending && <p>Loading...</p>}
    {error && <div>{error}</div>}
    {blogs && (
        <article>
            <h2>{blogs.title}</h2>
            <p>written by {blogs.author}</p>
            <p>{blogs.body}</p>
            <button onClick={handleClick}>delete</button>
        </article>
    )}
    
</div>
  )
}

export default BlogDetails
