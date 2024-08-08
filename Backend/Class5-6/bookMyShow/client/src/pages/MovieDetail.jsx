import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = [
  // Example movie data
  {
    id: 1,
    title: 'Movie 1',
    image: 'https://via.placeholder.com/600x400',
    description: 'Description of Movie 1',
    releaseDate: '2024-08-01',
    language: 'English',
    genres: ['Action', 'Drama'],
  },
  {
    id: 2,
    title: 'Movie 2',
    image: 'https://via.placeholder.com/600x400',
    description: 'Description of Movie 2',
    releaseDate: '2024-09-01',
    language: 'French',
    genres: ['Comedy', 'Romance'],
  },
  // Add more movie objects here
];

const MovieDetail = () => {
  const { movieId } = useParams();
  const movie = movieData.find((m) => m.id === parseInt(movieId));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img src={movie.image} alt={movie.title} className="w-full md:w-1/2 rounded-lg" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700 mb-4">{movie.description}</p>
            <p className="text-gray-600 mb-2"><strong>Release Date:</strong> {movie.releaseDate}</p>
            <p className="text-gray-600 mb-2"><strong>Language:</strong> {movie.language}</p>
            <p className="text-gray-600 mb-4"><strong>Genres:</strong> {movie.genres.join(', ')}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
