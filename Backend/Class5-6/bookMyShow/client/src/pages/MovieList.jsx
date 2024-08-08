import moment from "moment";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { jtwToken } from '../constants/authToken';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    poster: "",
    title: "",
    description: "",
    genre: [],
    language: [],
    releaseData: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "genre" || name === "language") {
      value = value.split(",");
    }
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    fetch("http://localhost:5010/api/movie", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
        jwttoken: jtwToken
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 401) {
          return;
        }
        setMovies([...movies, newMovie]);
        setNewMovie({
          poster: "",
          title: "",
          description: "",
          genre: [],
          language: [],
          releaseData: "",
          duration: "",
        });
        setModalIsOpen(false);
      })
      .catch((e) => {
        window.alert(e.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5010/api/movie", {
      headers: {
        jwttoken: jtwToken
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Movies</h2>
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by movie"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm"
          />
          <button
            onClick={() => setModalIsOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Movie
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Poster</th>
              <th className="py-2 px-4 border-b border-gray-200">Title</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Description
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Genres</th>
              <th className="py-2 px-4 border-b border-gray-200">Languages</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Release Date
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Duration</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-12 h-12"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {movie.title}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {movie.description}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {movie.genre?.join(", ")}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {movie.language?.join(", ")}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {moment(movie.releaseData).format("DD-MM-YYYY")}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {movie.duration} min
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Movie"
        className="max-w-lg mx-auto w-96 bg-white p-8 rounded-lg shadow-lg mt-12"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Add Movie</h2>
        <form onSubmit={handleAddMovie}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="poster"
            >
              Poster URL
            </label>
            <input
              type="text"
              id="poster"
              name="poster"
              value={newMovie.poster}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Poster URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newMovie.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newMovie.description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genre"
            >
              Genres
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={newMovie.genre}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Genres"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="language"
            >
              Languages
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={newMovie.language}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Languages"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="releaseDate"
            >
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseData"
              value={newMovie.releaseData}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="duration"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={newMovie.duration}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Duration"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleAddMovie}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline
                            focus:shadow-outline"
            >
              Add Movie
            </button>
            <button
              type="button"
              onClick={() => setModalIsOpen(false)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MovieList;
