import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const {  movieId } = useParams();

    useEffect(() => {
        fetch( `https://api.themoviedb.org/3/movie/${movieId}?api_key=0b5415eb9bf023d556ef265b425e0e4a`)
            .then(res => res.json())
            .then(data => setMovieDetail(data))
    }, []);

    return (
        <div className="movie-detail">
            <h1>{movieDetail.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}/>
            <p>{movieDetail.overview}</p>
        </div>
    )
}

export default MovieDetail;