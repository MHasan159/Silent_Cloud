import React, {useEffect, useState} from "react"
import { Route, Switch, Link } from "react-router-dom"
import NavTabs from "./components/NavTabs"
import Playlists from "./components/Playlists"
import SimpleBottomNavigation from "./components/SimpleBottomNavigation"
import ActionAreaCard from "./components/ActionAreaCard"
import Artists from "./components/Artists"


function App(){

  const playListApi = "http://localhost:9292/playlists"

  const artistsApi = "http://localhost:9292/artists"

  const [playlist, setPlaylist] = useState([])

  const [artists, setArtists] = useState([])

  const [page, setPage] = useState("/")


  useEffect(()=>{
    fetch(playListApi)
    .then(r => r.json())
    .then(data => setPlaylist(data))
  }, [])

  useEffect(()=>{
    fetch(artistsApi)
    .then(r => r.json())
    .then(data => setArtists(data))
  }, [])


return(
  <div>
    <SimpleBottomNavigation/>
    <Switch>
      <Route exact path="/">
        <Playlists playlist={playlist} />
      </Route>
      <Route exact path="/artists">
        <Artists artists={artists} />
      </Route>

    </Switch>
  </div>


)
}
export default App; 