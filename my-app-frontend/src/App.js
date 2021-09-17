import React, {useEffect, useState} from "react"
import { Route, Switch, Link } from "react-router-dom"
import NavTabs from "./components/NavTabs"
import Playlists from "./components/Playlists"
import SimpleBottomNavigation from "./components/SimpleBottomNavigation"
import ActionAreaCard from "./components/ActionAreaCard"
import Artists from "./components/Artists"
import Songs from "./components/Songs"
import ArtistSongs from "./components/ArtistSongs"
import PlaylistSongs from "./components/PlaylistSongs"


function App(){

  const playListApi = "http://localhost:9292/playlists"

  const artistsApi = "http://localhost:9292/artists"

  const songsApi = "http://localhost:9292/songs"

  const [playlist, setPlaylist] = useState([])

  const [artists, setArtists] = useState([])

  const [songs, setSongs] = useState([])

  const [page, setPage] = useState("/")

  const [image, setImage] = useState("")

  const [newPlaylist, setNewPlaylist] = useState("")

  useEffect(()=>{
    fetch(playListApi)
    .then(r => r.json())
    .then(data => setPlaylist(data))
  }, [image])

  useEffect(()=>{
    fetch(artistsApi)
    .then(r => r.json())
    .then(data => setArtists(data))
  }, [])

  useEffect(()=>{
    fetch(songsApi)
    .then(r => r.json())
    .then(data => setSongs(data))
  }, [])


return(
  <div>
    <SimpleBottomNavigation/>
    <Switch>
      <Route exact path="/">
        <Playlists playlist={playlist} setPlaylist={setPlaylist} image={image} setImage={setImage} newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist} />
      </Route>
      <Route path="/artists">
        <Artists artists={artists} />
      </Route>
      <Route path="/songs">
        <Songs songs={songs}  />
      </Route>
      <Route path="/artist/:id">
        <ArtistSongs />
      </Route>
      <Route path="/playlists/:id">
        <PlaylistSongs/>
      </Route>

    </Switch>
  </div>


)
}
export default App; 