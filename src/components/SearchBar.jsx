import React, { useEffect, useState } from 'react';

const SearchBar = ({filterSearch}) => {
//   const [input, setInput] = useState('');

  const handleInputSearch = (e) => {
    // setInput(e.target.value);
    filterSearch(e.target.value);
  };

//   useEffect(() => {
//     console.log("I: ", input)
//     filterSearch(input);


//   }, [input])

  return (
    <nav className="container my-5">
      <h2 className="text-center">Search</h2>
      <form className="container-fluid">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            // value={input}
            onChange={handleInputSearch}
          />
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
