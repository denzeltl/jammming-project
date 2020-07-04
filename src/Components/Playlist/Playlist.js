import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ playlistTracks, onButtonClick, onNameChange, playlistName }) => {
    const handleNameChange = (e) => {
        onNameChange(e.target.value);
    };
    return (
        <div className="Playlist">
            <input value={playlistName} onChange={handleNameChange} />
            <TrackList tracks={playlistTracks} onButtonClick={onButtonClick} isRemoval={true} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;
