import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = ({ searchResults, onButtonClick }) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={searchResults} onButtonClick={onButtonClick} isRemoval={false} />
        </div>
    );
};

export default SearchResults;
