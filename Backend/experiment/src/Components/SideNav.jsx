// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const  SideNav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-yellow-400">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/tv-shows" className="hover:text-yellow-400">
            TV Shows
          </Link>
        </li>
        <li>
          <Link to="/my-list" className="hover:text-yellow-400">
            My List
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-yellow-400">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
