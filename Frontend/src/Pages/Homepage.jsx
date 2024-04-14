import Home from "../Components/Home";
import Trending from "../Components/Trending";
import NewSection from "../Components/NewSection";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function HomePage(){
    return(
        <>
        <Navbar/>
        <Home/>
        <Trending/>
        <NewSection/>
        <Footer/>
        </>
    )
}