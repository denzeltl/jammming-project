import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = ({ tracks, onButtonClick, isRemoval }) => {
    return (
        <div className="TrackList">
            {tracks.map((track) => (
                <Track key={track.id} track={track} onButtonClick={onButtonClick} isRemoval={isRemoval} />
            ))}
        </div>
    );
};

export default TrackList;
