import React from "react";
import Announcoment from "../components/Announcoment";
import Catgory from "../components/Catgory";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import SimpleSlider from "../components/Slider";

const Home = () =>(
    <React.Fragment>
        <Announcoment/>
        <NavBar/>
        <SimpleSlider/>
        <Catgory/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </React.Fragment>
)

export default React.memo(Home);