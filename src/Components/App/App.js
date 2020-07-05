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
    const [playlistTracks, setPlaylistTracks] = useState([
        { name: 'Crash', artist: 'Illenium', album: '0034', id: 4 },
        { name: 'Dark Skies', artist: 'Afrojack', album: 'Play', id: 5 },
        { name: 'High Dynasty', artist: 'Denzel Lester', album: 'Hard', id: 6 },
    ]);
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const [searchBarTerm, setSearchBarTerm] = useState('');

    const onButtonClick = {
        addTrack(track) {
            if (playlistTracks.find((savedSong) => savedSong.id === track.id)) {
                // TODO: SONG ALREADY IN YOUR PLAYLIST
                return;
            } else {
                setPlaylistTracks([...playlistTracks, track]);
            }
        },
        removeTrack(track) {
            // TODO: DO YOU WANT TO REMOVE SONG FROM PLAYLIST?
            setPlaylistTracks(playlistTracks.filter((song) => song.id !== track.id));
        },
    };
    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    };
    const savePlaylist = () => {
        const trackURIs = playlistTracks;
    };
    const searchSpotify = (search) => {
        console.log(search);
    };
    const updateSearchBarTerm = (name) => {
        setSearchBarTerm(name);
    };

    return (
        <div>
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar onSearch={searchSpotify} searchBarTerm={searchBarTerm} onSearchTerm={updateSearchBarTerm} />
                    <div className="App-playlist">
                        <SearchResults searchResults={searchResults} onButtonClick={onButtonClick} />
                        <Playlist playlistTracks={playlistTracks} onButtonClick={onButtonClick} playlistName={playlistName} onNameChange={updatePlaylistName} onSave={savePlaylist} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
