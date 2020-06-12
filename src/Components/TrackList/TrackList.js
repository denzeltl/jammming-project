import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
    return (
        <div className="TrackList">
            {props.tracks.map((track) => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
};

export default TrackList;
