import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jtwToken } from "../constants/authToken";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5010/api/movie/${movieId}`, {
      headers: {
        jwttoken: jtwToken,
      },
    })
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700 mb-4">{movie.description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Release Date:</strong> {movie.releaseData}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Language:</strong> {movie.language?.join(", ")}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Genres:</strong> {movie.genre?.join(", ")}
            </p>
            <Link to={`/movie/${movie._id}/theatres`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
