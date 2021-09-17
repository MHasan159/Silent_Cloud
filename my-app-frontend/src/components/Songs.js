import React from "react";
import SongsGrid from "./SongsGrid";




function Songs( {songs} ){



    return(
        <div>
            <SongsGrid songs={songs}/>
        </div>
    )
}

export default Songs