import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDelete } from "../store/FavouriteStore";

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

const Favourite = () => {
  const [filteredFavourites, setFilteredFavourites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const genres = (() => {
    const selectedGenres = new Set();
    Object.values(favourites).forEach((movie) => {
      selectedGenres.add(movie.genre_ids[0]);
    });
    return Array.from(selectedGenres);
  })();

  const handleSearch = (e) => {
    setFilteredFavourites(
      Object.values(favourites).filter((movie) =>
        movie.original_title
          .toLowerCase()
          .includes(e.target.value?.toLowerCase())
      )
    );
  };

  const handleFilterByGenre = (genreId) => () => {
    setSelectedGenre(genreId);
    setFilteredFavourites(
      Object.values(favourites).filter(
        (movie) => !genreId || movie.genre_ids[0] === genreId
      )
    );
  };

  const handleSortingByRating = (desc) => {
    setFilteredFavourites(
      Object.values(favourites).sort((a, b) => {
        return desc
          ? a.vote_average - b.vote_average
          : b.vote_average - a.vote_average;
      })
    );
  };

  useEffect(() => {
    setFilteredFavourites(Object.values(favourites));
  }, [favourites]);

  return (
    <div className="favourite-wrapper">
      <h1>Favourites</h1>
      <div className="favourite-section">
        <div className="left-section">
          <div className="genres-section">
            <div
              className={`genre ${selectedGenre === "" ? "selected" : ""}`}
              onClick={handleFilterByGenre("")}
            >
              All Genres
            </div>
            {genres.map((genreId) => (
              <div
                className={`genre ${
                  selectedGenre === genreId ? "selected" : ""
                }`}
                onClick={handleFilterByGenre(genreId)}
              >
                {genreids[genreId]}
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <div className="search">
            <input placeholder="Search by movie name" onKeyUp={handleSearch} />
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Popularity</th>
                  <th>
                    <span onClick={() => handleSortingByRating(true)}>
                      &#8963;
                    </span>{" "}
                    Rating{" "}
                    <span
                      onClick={() => handleSortingByRating(false)}
                      style={{ fontSize: "x-large" }}
                    >
                      &#8964;
                    </span>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredFavourites.map((movie) => (
                  <tr>
                    <td>
                      <img
                        alt="dummy"
                        width="50px"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      />
                    </td>
                    <td>{movie.original_title}</td>
                    <td>{genreids[movie.genre_ids[0]]}</td>
                    <td>{movie.popularity}</td>
                    <td>{movie.vote_average}</td>
                    <td>
                      <button onClick={() => dispatch(onDelete(movie))}>-</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
