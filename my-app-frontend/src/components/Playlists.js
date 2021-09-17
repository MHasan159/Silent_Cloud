import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import FormData from "./FormData"



function Playlists( {playlist}) {

   const mappedPlaylist = playlist.map((playli)=>{
       return <ActionAreaCard model={playli} />
    })

    return(
        <>
        <div className="grid">
            {mappedPlaylist}
        </div>
        <div>
            <FormData/>
        </div>
        </>

    )
}
export default Playlists