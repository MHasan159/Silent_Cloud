
import React from "react";
import { Link } from "react-router-dom";



function Playlists( {removePlaylist, playlist, setPlaylist, image, setImage, newPlaylist, setNewPlaylist}) {


   const mappedPlaylist = playlist.map((playli)=>{
       return(
           
            <ActionAreaCard model={playli} setPlaylist={setPlaylist} removePlaylist={removePlaylist} />
            
       )
    })

    return(
        <div>
            <div className="grid">
                {mappedPlaylist}
                <div><br></br></div>
            </div>
            <div className="createPlaylist">
                <BasicTextFields image={image} setImage={setImage} newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist}/>
            </div>
        </div>

    )

    

}