import React from "react";
import ActionAreaCard from "./ActionAreaCard";


function Artists({artists}){

    const mappedArtists = artists.map((artist)=>{
        return <ActionAreaCard playlist={artist} />
     })



    return(
        <div>
            {mappedArtists}
        </div>
    )
}


export default Artists