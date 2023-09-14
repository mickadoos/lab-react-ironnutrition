
const SearchBar = ({filterSearch}) => {

  const handleInputSearch = (e) => {
    filterSearch(e.target.value);
  };


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
            onChange={handleInputSearch}
          />
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
