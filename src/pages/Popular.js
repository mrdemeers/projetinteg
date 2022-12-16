import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PopularMovies from "../components/PopularMovies";
import Header from "../components/Header_film"
const Popular = () => {
    return (
        <div className="popular">
            <Logo />
            <Navigation />
            <PopularMovies />
            <Footer />
        </div>
    )
}

export default Popular;