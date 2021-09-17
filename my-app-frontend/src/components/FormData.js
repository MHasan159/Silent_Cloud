
import React, { useState } from 'react';

function FormData({addPlaylist}) {
  const [playlistName, setPlaylistName] = useState("");
  const [visits, setVisits] = useState("");
  const [image, setImage] = useState("");
        
        const handleSubmit = (e) => {
          e.preventDefault()
          addPlaylist({playlistName, visits, image})
        }
    return (
        <form className = "Form" onSubmit={handleSubmit}>
        <h2>Create New Playlist</h2>
        <p>
          <label htmlFor="name">Playlist Name</label><br/>
          <input
            type="text"
            id=" name"
            name="name"
            onChange={(e) => setPlaylistName(e.target.value)}
            value={playlistName}
          />
        </p>
        <p>
          <label htmlFor="visits">Visits</label><br/>
          <input
            type="text"
            id="visits"
            name="visits"
            onChange={(e) => setVisits(e.target.value)}
            value={visits}
          />
        </p>
        <p>
          <label htmlFor="image_url">Image</label><br/>
          <input
            type="text"
            id="image_url"
            name="image_url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </p>
        <button className = "Submit" type="submit">submit</button>
      </form>
    )
}
export default FormData;