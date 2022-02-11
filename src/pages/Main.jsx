import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";
import AuthContext from "../context/AuthContext";

const UNFILTERED = `https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f`

const FILTERED = `https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query=`

export default function Main() {

    let content;
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const getMovies = (API) => {
        setLoading(true)
        axios.get(API)
            .then((res) => {
                setMovies(res.data.results)
                setLoading(false)
                if (res.data.results.length == 0) {
                    setNotFound(true);
                }
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            getMovies(FILTERED + searchTerm)
            setSearchTerm('')
        } else {
            alert('Please log in to make a search');
        }

    }

    if (loading) {
        content = <Loading />
    } else if (notFound) {
        content = <NotFound />
    }
    else {
        content = <div className="movie-container">
            {
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        overview={movie.overview}
                        vote_average={movie.vote_average}
                    />
                ))
            }
        </div>
    }

    useEffect(() => {
        getMovies(UNFILTERED)
    }, []);

    return (
        <React.Fragment>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type='search'
                    placeholder='Search a movie....'
                    className='search-input'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-primary'
                />
            </form>
            {content}

        </React.Fragment>
    )

}
