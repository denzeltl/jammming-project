import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
    let tracksToRender;
    if (props.tracks) {
        tracksToRender = props.tracks.map((track) => <Track key={track.id} track={track} />);
    }

    return <div className="TrackList">{tracksToRender}</div>;
};

export default TrackList;
