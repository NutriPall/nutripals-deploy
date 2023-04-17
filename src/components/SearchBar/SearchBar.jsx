import React from "react";
import search from "./image-search/search-icon.png"
import "./SearchBar.css"

const SearchBar = ({ query, handleChange, searchRecipe }) => {


    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        searchRecipe()
      }
    }

  return (
    <div className="searchBar">
      <label htmlFor="query"></label>
      <input
        className="searchBar-input"
        type="search"
        name="query"
        placeholder="Search for your favorite recipe"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-outline-secondary search-btn" type="button" name="submit" onClick={searchRecipe}>
      <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;