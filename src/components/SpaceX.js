import React, {useEffect, useState} from 'react';
import Rocket from "./Rocket";
import "./style.css"
const SpaceX = () => {
    const [spaceX,setSpaceXitem]= useState([]);
    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(spaceXItem=>setSpaceXitem(spaceXItem));
    },[])

    return (
        <div>
            <h1 className={"title"}>SpaceX mission to 2019</h1>
        <div className={"spaceX"}>
            {spaceX.filter(item=>item.launch_year!=="2020")
                .map(item=><Rocket key={item.flight_number} rocket={item}/>)}
        </div>
        </div>
    );
};

export default SpaceX;
