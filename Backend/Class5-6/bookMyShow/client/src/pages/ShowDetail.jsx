import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jtwToken } from '../constants/authToken';


const ShowPage = () => {
  const { showId } = useParams();
  const [show, setShow] = useState({});
  const [selectedSeats, setSelectedSeats] = useState(1);

  const handleSeatChange = (e) => {
    setSelectedSeats(Number(e.target.value));
  };

  const handleBookSeats = () => {
    // Implement booking logic here
    alert(`Booked ${selectedSeats} seat(s) for ${show.movieName}`);
  };

  useEffect(() => { 
    fetch(`http://localhost:5010/api/show/${showId}`, {
      headers: {
        jwttoken: jtwToken
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShow({ ...data, availableSeats: data.totalSeats - data.bookedSeats?.length});
      });
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Show Details</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Theatre: {show.theatre?.name}</h3>
          <p className="text-gray-700 mb-2"><strong>Movie:</strong> {show.movie?.title}</p>
          <p className="text-gray-700 mb-2"><strong>Duration:</strong> {show.movie?.duration} min</p>
          <p className="text-gray-700 mb-2"><strong>Show Time:</strong> {show.time}</p>
          <p className="text-gray-700 mb-2"><strong>Total Seats:</strong> {show.totalSeats}</p>
          <p className="text-gray-700 mb-6"><strong>Available Seats:</strong> {show.availableSeats}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <label htmlFor="seats" className="text-gray-700 text-lg mb-2 md:mb-0 md:mr-4">Select Seats:</label>
          <select
            id="seats"
            value={selectedSeats}
            onChange={handleSeatChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 md:mb-0"
          >
            {Array.from({ length: show.availableSeats }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <button
            onClick={handleBookSeats}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Book Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
