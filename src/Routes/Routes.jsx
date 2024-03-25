import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Lauout/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import BookMarks from "../Pages/BookMarks";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/Blogs",
          element:<Blogs></Blogs>,
          loader: () => 
          fetch('https://dev.to/api/articles/latest?per_page=20&top=7'),
        },
        {
          path:"/blog/:id",
          element:<Blog></Blog>,
          loader:({ params })=>
          fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                path:"content",
                element:<Content></Content>,
                loader:({ params })=>
                fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:"author",
                element:<Author></Author>,
                loader:({ params })=>
                fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ],
        },
        {
          path:"/BookMarks",
          element:<BookMarks></BookMarks>,
        }
      ]
    },
    
  ]);