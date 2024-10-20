// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaLayerGroup, FaCheck, FaList, FaEdit, FaThList } from 'react-icons/fa'; // Using FontAwesome Icons for enhanced visuals

const Navbar = () => {
  return (
    <nav className=' shadow-lg'>
      <div className='container mx-auto p-4'>
        <ul className='flex justify-around items-center space-x-8'>
          <li>
            <Link
              to="/"
              className='flex items-center bg-green-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
            >
              <FaPlus className="mr-2"/> Create Rule
            </Link>
          </li>
          <li>
            <Link
              to="/combine-rules"
              className='flex items-center bg-teal-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-teal-700 ease-in-out duration-300'
            >
              <FaLayerGroup className="mr-2"/> Combine Rules
            </Link>
          </li>
          <li>
            <Link
              to="/evaluate-rule"
              className='flex items-center bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-blue-700 ease-in-out duration-300'
            >
              <FaCheck className="mr-2"/> Evaluate Rule
            </Link>
          </li>
          <li>
            <Link
              to="/display-rules"
              className='flex items-center bg-purple-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-purple-700 ease-in-out duration-300'
            >
              <FaList className="mr-2"/> Display Rules
            </Link>
          </li>
          <li>
            <Link
              to="/modify-rules"
              className='flex items-center bg-yellow-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-yellow-700 ease-in-out duration-300'
            >
              <FaEdit className="mr-2"/> Modify Rules
            </Link>
          </li>
          <li>
            <Link
              to="/getall-rules"
              className='flex items-center bg-red-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-red-700 ease-in-out duration-300'
            >
              <FaThList className="mr-2"/> Get All Rules
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
