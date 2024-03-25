import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <div className="hero min-h-[calc(100vh-295px)]">
  <div className="hero-content text-center ">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Welcome to <span className="bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
      <p className="py-4">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
     <div className="flex gap-4 justify-center">

   <Link to="/Blogs" className="relative inline-block px-4 py-2 font-bold group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white">Read Blogs</span>
</Link>
   <Link to="/BookMarks" className="relative inline-block px-4 py-2 font-bold group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white">BookMarks</span>
</Link>

     </div>
    </div>
  </div>
</div>
    );
}

export default Hero;