import React from 'react'
import BlockList from './BlockList';
import userFetch from './userFetch';
const Home = () => {
  // const handleClick = (e) => {
  //   console.log('hello ninjas', e);
  // }

  // const handleClickAgain = (name, e) => {
  //   console.log('hello ' + name, e.target);
  // }

  // return (
  //   <div className="home">
  //     <h2>Homepage</h2>
  //     <button onClick={handleClick}>Click me</button>
  //     <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
  //   </div>
  // );

  const {data : blogs ,isPending, error} = userFetch('http://localhost:8000/blogs'); 
 
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   setTimeout(() => {
    //     fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //       if (!res.ok) { // error coming back from server
    //         throw Error('could not fetch the data for that resource');
    //       } 
    //       return res.json();
    //     })
    //     .then(data => {
    //       setIsPending(false);
    //       setBlogs(data);
    //       setError(null);
    //     }) 
    //     .catch(err => {
    //       // auto catches network / connection error
    //       setIsPending(false);
    //       setError(err.message);
    //     })
    //   }, 1000);
    // }, [])
  

  return (
    <div className="home">
       { error && <div>{ error }</div> }
      {isPending && <div>Loading...</div>}
       {blogs && <BlockList blogs = {blogs} title = "All blogs"/>}
      {/* <BlockList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" /> */} 
    </div>
  );
}

export default Home
