import React from "react";
import ActionAreaCard from "./ActionAreaCard";


function Artists({artists}){

    const mappedArtists = artists.map((artist)=>{
        return <ActionAreaCard model={artist}  />
     })



    return(
        <div className="grid">
            {mappedArtists}
        </div>
    )
}


export default Artists