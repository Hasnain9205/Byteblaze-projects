
import Hero from "../Components/Hero";
import wave from "../assets/wave.svg"

const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center">
           <Hero></Hero>  
           <img className="w-full" src={wave} alt="" /> 
        </div>
    );
}

export default Home;