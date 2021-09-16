import React from "react";
import ActionAreaCard from "./ActionAreaCard";

function Playlists( {playlist}) {

   const mappedPlaylist = playlist.map((playli)=>{
       return <ActionAreaCard playlist={playli} />
    })

    return(
        <div>
            {mappedPlaylist}
        </div>

    )
}
export default Playlists