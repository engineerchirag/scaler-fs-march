import React, { useState } from 'react';
import Modal from 'react-modal';

const moviesData = [
  // Example movie data
  {
    poster: 'https://via.placeholder.com/50',
    title: 'Inception',
    description: 'A mind-bending thriller',
    genres: 'Action, Sci-Fi',
    languages: 'English',
    releaseDate: '2010-07-16',
    duration: '148 min',
  },
];

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    poster: '',
    title: '',
    description: '',
    genres: '',
    languages: '',
    releaseDate: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({
      poster: '',
      title: '',
      description: '',
      genres: '',
      languages: '',
      releaseDate: '',
      duration: '',
    });
    setModalIsOpen(false);
  };

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
              <th className="py-2 px-4 border-b border-gray-200">Description</th>
              <th className="py-2 px-4 border-b border-gray-200">Genres</th>
              <th className="py-2 px-4 border-b border-gray-200">Languages</th>
              <th className="py-2 px-4 border-b border-gray-200">Release Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Duration</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img src={movie.poster} alt={movie.title} className="w-12 h-12" />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{movie.title}</td>
                <td className="py-2 px-4 border-b border-gray-200">{movie.description}</td>
                <td className="py-2 px-4 border-b border-gray-200">{movie.genres}</td>
                <td className="py-2 px-4 border-b border-gray-200">{movie.languages}</td>
                <td className="py-2 px-4 border-b border-gray-200">{movie.releaseDate}</td>
                <td className="py-2 px-4 border-b border-gray-200">{movie.duration}</td>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="poster">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genres">
              Genres
            </label>
            <input
              type="text"
              id="genres"
              name="genres"
              value={newMovie.genres}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Genres"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="languages">
              Languages
            </label>
            <input
              type="text"
              id="languages"
              name="languages"
              value={newMovie.languages}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Languages"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="releaseDate">
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={newMovie.releaseDate}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
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
}

export default MovieList;

