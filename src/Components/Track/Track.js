import React from 'react';
import './Track.css';

const Track = (props) => {
    // function renderAction() {
    //     return <button className="Track-action">{isRemoval ? '-' : '+'}</button>;
    // }
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.title.album}
                </p>
            </div>
            {/* <button className="Track-action"><!-- + or - will go here --></button> */}
        </div>
    );
};

export default Track;
