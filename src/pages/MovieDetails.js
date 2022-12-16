import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import axios from "axios";
import Navigation from "../components/Navigation";
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";

const MovieDetails = (props) => {

    const id = props.location.state.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const [detail, setDetail] = useState({});
    const [genres, setGenres] = useState([]);
    const [credits, setCredits] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios.get(URL).then((res) => {
            setDetail(res.data);
            setGenres(res.data.genres);
        });
        axios.get(URL_CREDITS).then((res) => {
            setCredits(res.data.cast);
        });
    }, [URL, URL_CREDITS]);

    return (
        <React.Fragment>
            <div className="details-container">
                <Logo />
                <Navigation />
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img
                                className="locandina"
                                src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
                                alt="poster"
                            />
                            <h1>{detail.title}</h1>
                            <h4>{detail.release_date}</h4>
                            <span className="minutes">{detail.runtime} min</span>
                            {genres.map((g) => {
                                return (
                                    <p
                                        key={g.id}
                                        className="type"
                                        onClick={() => history.push("/categories/" + g.id, { id: g.id })}>
                                        {g.name}</p>
                                );
                            })}
                        </div>
                        <div className="movie_desc">
                            <p className="text">{detail.overview}</p>
                        </div>

                        <div> <h1 className="textActor2">Acteurs ayant joué dans ce film</h1></div>
                        <div className="gridView2 justify-content-center">


                            {credits
                              
                                .map(credit => {
                                    return (
                                        <Actor
                                            actor={credit}
                                            key={credit.id}
                                            onClickActor={() => history.push("/actorDetails/" + credit.id, { id: credit.id })} />
                                    );
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </React.Fragment>


    )
}

export default MovieDetails;