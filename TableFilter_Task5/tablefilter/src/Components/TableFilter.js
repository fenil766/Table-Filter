import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from React Icons
import { items } from '../Data/data.js';
import '../tablefilter.css'; // Import the external CSS
import { FaRupeeSign } from 'react-icons/fa';

const TableFilter = function () {
  const [search, setSearch] = useState('');

  // Logic for filtering
  const filtering = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-filter-container">
      <h1>Filterable Table</h1>
      
      {/* Input field with search icon */}
      <div className="search-input">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table to display filtered items */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price <FaRupeeSign size={13} /></th>
          </tr>
        </thead>
        <tbody>
          {filtering.length > 0 ? (
            filtering.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableFilter;
