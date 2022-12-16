import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Movie from "./Movie";
import './header.css';
import { useHistory } from "react-router-dom";
import classes from './Genres.module.css';

const CategoriesMovies = (props) => {
    const radios2 = [
        { label: "Page: 1", value: "1" },
        { label: "Page: 2", value: "2" },
        { label: "Page: 3", value: "3" },
        { label: "Page: 4", value: "4" },
    ]

    const { idGenre } = props;
    const history = useHistory();
    const [total_pages, setTotal_pages] = useState("");
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [selectedPage, setSelectedPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const idParam = idGenre ? idGenre : id;
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=${selectedPage}&with_genres=${idParam}`;
    const URL_GENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US";





    useEffect(() => {

        axios.get(URL).then((res) => {
            setTotal_pages(res.data.total_pages)
        });
        axios.get(URL).then((res) => {
            setData(res.data.results);
        });
        axios.get(URL_GENRES).then((res) => {
            setCategories(res.data.genres);
        });
    }, [idParam, selectedPage]);


    const onChange = (e) => {
        setId(e.target.value);
    }



    return (


        <div className="categoriesMovies">

            {!idGenre && (

                <div className="sort-container">
                    <select value={id} onChange={onChange}>
                        <option>Sélectionnez une catégorie</option>
                        {categories.map((genre) => {
                            return <option value={genre.id}>{genre.name}</option>
                        })}
                    </select>

                </div>
            )}
            {idParam ? (
                <div className="">
                    <ul className="gridView">
                        {data.map((movie) => (
                            <Movie movie={movie} key={movie.id} onClickMovie={() => history.push('/movieDetails/' + movie.id, { id: movie.id })} />
                        ))}
                    </ul>

                    <div className="pagination d-flex justify-content-center">
                        <button type="button" onClick={() => selectedPage * 1 > 1 ? (setSelectedPage(selectedPage * 1 - 1)) : setSelectedPage = 1}>PREVIOUS</button>

                        <button type="button" onClick={() => setSelectedPage(selectedPage)}>
                            {selectedPage}
                        </button>

                        <button type="button" onClick={() => selectedPage * 1 == total_pages * 1 ? total_pages * 1 : selectedPage * 1 + 1}>
                            {selectedPage * 1 + 1}
                        </button>

                        <button type="button" onClick={() => selectedPage * 1 == total_pages * 1 ? total_pages * 1 : setSelectedPage(selectedPage * 1 + 1)}>

                            {selectedPage * 1 + 2}
                        </button>

                        <button type="button" onClick={() => selectedPage * 1 == total_pages * 1 ? total_pages * 1 : setSelectedPage(selectedPage * 1 + 1)}>     {selectedPage * 1 + 3}
                        </button>

                        <button type="button" onClick={() => selectedPage * 1 < total_pages * 1 ? total_pages * 1 : setSelectedPage(selectedPage * 1 + 1)}>
                            {selectedPage * 1 + 4}
                        </button>

                        <button type="button" onClick={() => selectedPage * 1 < total_pages * 1 - 4 ? (setSelectedPage(selectedPage * 1 + 1)) : setSelectedPage = total_pages * 1}>NEXT</button>
                    </div>
                </div>
            ) : (
                <div className="placeholder-container">
                    <h4>Rien à afficher, veuillez sélectionner une catégorie</h4>
                </div>
            )}

            <div className="d-flex justify-content-center">
                <div className={classes.genre_container}>
                    {categories &&
                        categories.map(genre => (
                            <button
                                onClick={onChange}
                                value={genre.id}
                                className={

                                    genre.id
                                        ? `${classes.genre_tile} ${classes.active}`
                                        : classes.genre_tile
                                }
                            >
                                {genre.name}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesMovies;