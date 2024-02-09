import React, { useState } from 'react';

function GifSearch({ submitHandler }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Invoke the submitHandler callback prop with the search term
    submitHandler(searchTerm);
    setSearchTerm(''); // Clear the input field after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for GIFs"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
