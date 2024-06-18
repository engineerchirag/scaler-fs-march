// https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=1

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=1')
            .then((res) => res.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <div className="movielist-wrapper">
            <div className="movielist-heading">
                <h1>Trending</h1>
            </div>
            <div className="movielist">
                {
                    movies.map(movie => (
                        <div className="movie">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            {/* <a href="/movie-detail"><h2>{movie.original_title}</h2></a> */}
                            <Link to={`/movie-detail/${movie.id}`}><h2>{movie.original_title}</h2></Link>
                            <button>Add to Favourites</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;