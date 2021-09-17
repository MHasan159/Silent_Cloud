import ActionAreaCard from "./ActionAreaCard";



export default function Playlists( {playlist}) {

   const mappedPlaylist = playlist.map((playli)=>{
       return <ActionAreaCard model={playli} />
    })
 return(
        <>
        <div className="grid">
            {mappedPlaylist}
        </div>
         </>

    )

    

}