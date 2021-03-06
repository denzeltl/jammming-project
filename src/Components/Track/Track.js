import React from 'react';
import './Track.css';

const Track = ({ track, onButtonClick, isRemoval }) => {
    const addTrack = () => {
        onButtonClick.addTrack(track);
    };
    const removeTrack = () => {
        onButtonClick.removeTrack(track);
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            <button onClick={isRemoval ? removeTrack : addTrack} className="Track-action">
                {isRemoval ? '-' : '+'}
            </button>
        </div>
    );
};

export default Track;
