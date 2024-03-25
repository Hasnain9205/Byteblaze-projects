import { useEffect, useState } from "react";
import { getBlogs } from "../Utilis";
import BlogCard from "../Components/BlogCard";
import { deleteBlog } from "../Utilis";
import EmptyState from "../Components/EmptyState";

const BookMarks = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[])
    const handleDelete=id=>{
		deleteBlog(id)
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
	}

    if(blogs.length<1){
        return <EmptyState
            massage='No Bookmarks Found!' 
            address={'/blogs'} 
            label={'Go To Blogs'}></EmptyState>
    }
    
    return(
        <div className="grid px-4 sm:px-8 lg:px-12 lg:py-8 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {
         blogs.map(blog=><BlogCard handleDelete={handleDelete} deleteable={true} blog={blog}></BlogCard>)
        }

     </div>
    );
}

export default BookMarks;