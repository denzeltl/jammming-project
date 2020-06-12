import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

const App = () => {
    const [searchResults, setSearchResults] = useState([
        { name: 'Venture', artist: 'Jaron', album: '002', id: 1 },
        { name: 'Light', artist: 'San Holo', album: 'album1', id: 2 },
        { name: 'Animals', artist: 'Garrix', album: 'Voices', id: 3 },
    ]);

    return (
        <div>
            <h1>
                Ja<span className="highlight">mmm</span>ing
            </h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults searchResults={searchResults} />
                    <Playlist />
                </div>
            </div>
        </div>
    );
};

export default App;
