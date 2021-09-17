
import React, { useState } from 'react';

export default function FormData({playlist}) {
  const [playlistName, setPlaylistName] = useState("");
  const [visits, setVisits] = useState("");
  const [image, setimage] = useState("");
        
        const handleSubmit = (e) => {
          e.preventDefault()
          playlist({playlistName, visits, image})
        }
    return (
        <form className = "Form" onSubmit={handleSubmit}>
        <h2>Playlist</h2>
        <p>
          <label htmlFor="name">Playlist Name</label><br/>
          <input
            type="text"
            id="name"
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
            onChange={(e) => setimage(e.target.value)}
            value={image}
          />
        </p>
        <button type="submit">submit</button>
      </form>
    )
}