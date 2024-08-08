import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-gray-300">Logo</Link>
      </div>
      <div className="space-x-4">
        <Link to="/admin/movies" className="hover:text-gray-300">Admin</Link>
        <Link to="/owner/theatres" className="hover:text-gray-300">Owner</Link>
      </div>
    </nav>
  );
};

export default Navbar;
