import React from 'react';
import "./style.css"

const Rocket = ({rocket}) => {
    return (
        <div className={"rocket"}>
            <h2>{rocket.flight_number} Mission: {rocket.mission_name}</h2>
            <h3>Year: {rocket.launch_year}</h3>
            <img src={rocket.links.mission_patch_small} alt={rocket.mission_name} />
        </div>
    );
};

export default Rocket;
