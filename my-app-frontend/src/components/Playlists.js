import React from "react";
import ActionAreaCard from "./ActionAreaCard";

function Playlists( {playlist}) {

   const mappedPlaylist = playlist.map((playli)=>{
       return <ActionAreaCard model={playli} />
    })

    return(
        <div className="grid">
            {mappedPlaylist}
        </div>

    )
}
export default Playlists