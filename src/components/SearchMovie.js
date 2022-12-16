import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from "react-router-dom";
import './header.css';

const SearchMovie = () => {

    const [total_pages, setTotal_pages] = useState("");
    const [selectedPage, setSelectedPage] = useState(1);
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}&page=${selectedPage}`;
    const history = useHistory();


    useEffect(() => {
        axios.get(URL).then((res) => {
            setTotal_pages(res.data.total_pages)
        });

        axios.get(URL).then((res) => setData(res.data.results));
    }, [query, selectedPage]);

    const onSearch = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div className="searchMovie">
            <div className="justify-content-center input-container">
                <input
                    className="input"
                    placeholder="Mot clé"
                    onChange={onSearch} >
                </input>
            </div>
            {query ? (
                <div>
                    <ul className="gridView">
                        {data.map((m) => (
                            <Movie movie={m} key={m.id} onClickMovie={() => history.push('/movieDetails/' + m.id, { id: m.id })} />
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
                    <h4>Rien à afficher, veuillez entrer un mot clé</h4>
                </div>
            )}



        </div>
    )
}

export default SearchMovie;

