import React from "react";
import SongsGrid from "./SongsGrid";
import BasicTable from "./BasicTable";




function Songs( {songs} ){



    return(
        <div>
            <BasicTable songs={songs}/>
            {/* <SongsGrid songs={songs}/> */}
        </div>
    )
}

export default Songs