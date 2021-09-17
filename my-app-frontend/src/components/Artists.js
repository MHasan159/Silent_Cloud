import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import { Route, Switch, Link } from "react-router-dom"
import { useHistory } from "react-router";


function Artists({artists}){

    const history = useHistory()

    function handleClick(e){
        history.push(e.target.name)
      }

    const mappedArtists = artists.map((artist)=>{

        return (
            
               <Link style={{textDecoration: "none"}} to={`/artist/${artist.id}`}>
                <ActionAreaCard name={artist.name} model={artist}  />
                </Link>
             
            
        )
     })



    return(
        <div className="grid">
            {mappedArtists}
        </div>
    )
}


export default Artists