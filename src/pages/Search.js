import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SearchMovie from "../components/SearchMovie";

const Search = () => {
    return (
        <div className="search">
            <Logo />
            <Navigation />
            <SearchMovie />
            <Footer />
        </div>
    )
}

export default Search;