import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react"

export default function BasicTextFields({image, setImage, newPlaylist, setNewPlaylist}) {

    

    const hash = {playlist_name: newPlaylist,
                  image_url: image
                     }
    

    function handleClick(e){
        if(e.target.value.length > 1 )
        {
        e.preventDefault()
        
        fetch("http://localhost:9292/post_playlist",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(hash)
        }
        )
        setNewPlaylist("")
        setImage("")}
        else{
            alert("Please Enter Credentials")
        }
    }
    function handlePlaylistChange(e){
        return setNewPlaylist(e.target.value)
    }
    function handleImageChange(e){
        setImage(e.target.value)
    }
    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', backgroundColor: "" },
      }}
      noValidate
      autoComplete="off"
      className="textBox"
    >
        <h3>Add New Playlist</h3>
      <TextField id="outlined-basic" label="Playlist Name" variant="outlined" onChange={handlePlaylistChange} value={newPlaylist} />
      <TextField id="filled-basic" label="Image URL" variant="outlined" onChange={handleImageChange} value ={image}  />
      <Button onClick={handleClick} value={newPlaylist} variant="contained">Create</Button>
    </Box>
  );
}