import React, {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";

export default function RequestForm() {
    const [playlist, setPlaylist] = useState([])
    // const [things, setThings] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292//post_playlist")
        .then(response => response.json())
        .then(data => setPlaylist(data));
      }, []);
return(
    <>
    </>
)

}
