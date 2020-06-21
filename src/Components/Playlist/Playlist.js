import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ playlistTracks, onAdd }) => {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            <TrackList tracks={playlistTracks} onAdd={onAdd} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;
