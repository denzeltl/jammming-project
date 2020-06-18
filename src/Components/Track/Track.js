import React from 'react';
import './Track.css';

const Track = (props) => {
    // function renderAction() {
    //     return <button className="Track-action">{isRemoval ? '-' : '+'}</button>;
    // }
    let titleToRender;
    let songToRender;
    if (props.track) {
        titleToRender = <h3>{props.track.name}</h3>;
        songToRender = (
            <p>
                {props.track.artist} | {props.title.album}
            </p>
        );
    }

    return (
        <div className="Track">
            <div className="Track-information">
                {titleToRender}
                {songToRender}
            </div>
            {/* <button className="Track-action"><!-- + or - will go here --></button> */}
        </div>
    );
};

export default Track;
