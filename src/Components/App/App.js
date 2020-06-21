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
    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState([
        { name: 'Crash', artist: 'Illenium', album: '0034', id: 4 },
        { name: 'Dark Skies', artist: 'Afrojack', album: 'Play', id: 5 },
        { name: 'High Dynasty', artist: 'Denzel Lester', album: 'Hard', id: 6 },
    ]);

    const addTrack = (track) => {
        if (playlistTracks.find((savedSong) => savedSong === track.id)) {
            return;
        } else {
            setPlaylistTracks(playlistTracks.push(track.id));
        }
    };

    return (
        <div>
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={searchResults} onAdd={addTrack} />
                        <Playlist playlistTracks={playlistTracks} onAdd={addTrack} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
