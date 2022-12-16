import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoriesMovies from "../components/CategoriesMovies";


const Categories = (props) => {
    const id = props.location.state?.id;
    return (
        <div className="categories">
            <Logo />
            <Navigation />
            <CategoriesMovies idGenre={id} />
            <Footer />
        </div>
    )
}

export default Categories;