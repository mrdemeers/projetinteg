import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Actor_casting from "../components/Actor_casting";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
const ActorDetails = (props) => {

    const id = props.location.state.id;
    const [detail, setDetail] = useState({});
    const [cast, setCast] = useState([]);
    const URL = `https://api.themoviedb.org/3/person/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const URL_Cast = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const history = useHistory();


    useEffect(() => {
        axios.get(URL).then((res) => {
            setDetail(res.data);
        });

        axios.get(URL_Cast).then((res) => {
            setCast(res.data.cast);
        });

    }, [id]);

    return (
        <React.Fragment>
            <div className="details-container">
                <Logo />
                <Navigation />
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img
                                className="locandina2"
                                src={
                                    detail.profile_path ?
                                        `https://image.tmdb.org/t/p/original${detail.profile_path}` :
                                        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                                }
                                alt="poster"
                            />
                            <h1>{detail.name}</h1>
                            <h4>{detail.birthday}</h4>
                            <span className="minutes">Place of birth : {detail.place_of_birth}</span>
                        </div>
                        <div className="actor_desc">
                            <p className="text">{detail.biography}</p>
                        </div>
                        <div className="textActor"><h1>Film ayant participé</h1></div>
                        <div className="gridView2 justify-content-center">


                            {cast.slice(0, 100).map((p) => (
                                <Actor_casting movie={p} key={p.id} onClickMovie={() => history.push('/movieDetails/' + p.id, { id: p.id })} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default ActorDetails;