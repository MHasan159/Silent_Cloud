import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const PlaylistSongs = () => {

    let { id } = useParams()
    let num = {id}.id
    console.log(id)
    
    const artistsSongsApi = `http://localhost:9292/playlists/${num}`

    const [artSongs, setArtSongs] = useState([])

    useEffect(()=>{
        fetch(artistsSongsApi)
        .then(r=> r.json())
        .then(data => setArtSongs(data))
    }, [num])

    // mappedArtSongs = artSongs.songs.map((song)=>{
    //     return(
    //         <BasicTable songs />
    //     )
    // })

    if(Object.keys(artSongs).length !== 0){
    return (
        <>
        <Typography className="typo" variant="h2">{artSongs.playlist_name}</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250, maxWidth: 1000, marginLeft:50, backgroundColor: "#E5E2E1" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Song Length</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Artist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artSongs.songs.map((song) => (
              <TableRow
                key={song.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {song.duration}
                </TableCell>
                <TableCell align="right">{song.title}</TableCell>
                <TableCell align="right">{song.artist.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
}else{
    return <h1>Loading...</h1>
}
}
export default PlaylistSongs
