import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, searchBarTerm, onSearchTerm }) => {
    const handleSearch = () => {
        onSearch(searchBarTerm);
    };
    const handleTermChange = (e) => {
        onSearchTerm(e.target.value);
    };
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} value={searchBarTerm} />
            <button className="SearchButton" onClick={handleSearch}>
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;
