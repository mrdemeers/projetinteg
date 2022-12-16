import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import ActorPopular from "./ActorPopular"
import './header.css';
import Header from "./Header_film";

import { useHistory } from "react-router-dom";

const PopularMovies = () => {

    const [trendingMovie, setTrendingMovie] = useState([""]);
    const [popular, setPopular] = useState([]);
    const [upcomming, setUpcomming] = useState([]);
    const [popularpeople, setPopularpeople] = useState([""]);
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1";
    const URL_UPCOMMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1";
    const URL_POPULAR = "https://api.themoviedb.org/3/person/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1";
    const URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day?api_key=9ae2d350894a663e6af2eca3b73cd0bb&language=en-US&page=1";
   
    const history = useHistory();
   

    useEffect(() => {
        axios.get(URL).then((res) => {
            setTrendingMovie(res.data.results);
        });
     
        axios.get(URL).then((res) => {
            setPopular(res.data.results);
        });
        axios.get(URL_POPULAR).then((res) => {
            setPopularpeople(res.data.results);
        });
        axios.get(URL_UPCOMMING).then((res) => {
            setUpcomming(res.data.results);
        });
    }, [URL, URL_POPULAR, URL_UPCOMMING, URL_TRENDING]);


    return (
        <div className="container-fluid">
            {trendingMovie.slice(0,1).map((p) =>(
 <Header trendingMovie={p} key={p.id}/>
            ))}
            



            <h1>POPULAR</h1>
            {<div className="gridView">

                {popular.slice(0, 4).map((p) => (
                    <Movie movie={p} key={p.id} onClickMovie={() => history.push('/movieDetails/' + p.id, { id: p.id })} />
                ))}
            </div>}
            <h1>UPCOMING</h1>
            {<div className="gridView">

                {upcomming.slice(0, 4).map((p) => (
                    <Movie movie={p} key={p.id} onClickMovie={() => history.push('/movieDetails/' + p.id, { id: p.id })} />
                ))}
            </div>}
            <h1>POPULAR PEOPLE</h1>
            {<div className="gridView">

                {popularpeople.slice(0, 4).map(x => (
                    <ActorPopular actorpopular={x} key={x.id}  onClickActor={() => history.push('/actorDetails/' + x.id, { id: x.id })} />
                ))}
            </div>}


     




        </div>
    )
}

export default PopularMovies;