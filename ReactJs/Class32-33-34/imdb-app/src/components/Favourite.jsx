import { useState } from "react";
import { useEffect } from "react";

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

const Favourite = ({ favourites, onDelete }) => {

    const genres = (() => {
        const selectedGenres = new Set();
        Object.values(favourites).forEach(movie => {
            selectedGenres.add(movie.genre_ids[0]);
        });
        return Array.from(selectedGenres);
    })();

    return (
        <div className="favourite-wrapper">
            <h1>Favourites</h1>
            <div className="favourite-section">
                <div className="left-section">
                    <div className="genres-section">
                        <div className="genre">All Genres</div>
                        {
                            genres.map(genreId => (
                                <div className="genre">{genreids[genreId]}</div>
                            ))
                        }

                    </div>
                </div>
                <div className="right-section">
                    <div className="search">
                        <input placeholder="Search by movie name" />
                    </div>
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Popularity</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.values(favourites).map(movie => (
                                        <tr>
                                            <td><img width="50px" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></td>
                                            <td>{movie.original_title}</td>
                                            <td>{genreids[movie.genre_ids[0]]}</td>
                                            <td>{movie.popularity}</td>
                                            <td>{movie.vote_average}</td>
                                            <td><button onClick={() => onDelete(movie)}>-</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favourite;