
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks,handleSpentTime,handleRemoveBookmark}) => {


    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch(`Blogs.json`)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    

    return (
        <div className="md:w-2/3">
            
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleSpentTime={handleSpentTime} handleRemoveBookmark={handleRemoveBookmark}></Blog>)
            }
        </div>
    );
};

export default Blogs;