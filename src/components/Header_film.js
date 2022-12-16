import React from 'react'
import './header_film.css';
import Logo from  "../components/Logo";




const Header = (props) => {
    const { trendingMovie } = props;
  let poster = "https://image.tmdb.org/t/p/original" + trendingMovie.backdrop_path;
    return (
        <div className="banner container-fluid" style={{ backgroundImage:`url(${poster})` }} >
                
            <div>
                <h1>{trendingMovie.title} </h1>
                <h2>{trendingMovie.release_date} | {trendingMovie.original_language}</h2>
                <p>
                 {trendingMovie.overview}
                </p>
                <a class="button" href="#popup"> Watch Trailer </a>
            </div>
            <div></div>
        </div>
    )
}

export default Header

