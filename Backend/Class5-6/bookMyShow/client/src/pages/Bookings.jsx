import React, { useEffect, useState } from 'react';
import { jtwToken } from '../constants/authToken';

const Bookings = () => {
  
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5010/api/booking`, {
      headers: {
        jwttoken: jtwToken
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Bookings</h2>
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by show"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm"
          />
          
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Movie</th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Time</th>
              <th className="py-2 px-4 border-b border-gray-200">Total Seats</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Bookings;

