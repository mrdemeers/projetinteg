import React from "react";
import './movie.scss';
import Rating from './Rating';

const Movie = (props) => {

  const { movie, onClickMovie } = props;
  let poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  let vote = Math.round((movie.vote_average * 5) / 10);
  return (


    <div className="wrapper" onClick={onClickMovie}>

      <div className="card">
        <img src={poster} className="cardimg" />
        <div className="descriptions">
          <div>
            <div className='categYear'>
              <span></span>

            </div>
            <h1 className="movieTitle"> {movie.title} </h1>
            <p>{movie.overview}</p>
           
          </div>

          <i className="fab fa-youtube"></i>
         
        </div>
        <div className="text-center">
           <Rating rating={vote} />
        <span>{movie.release_date}</span>
        </div>
      </div>

    </div>



  )
}

export default Movie;


