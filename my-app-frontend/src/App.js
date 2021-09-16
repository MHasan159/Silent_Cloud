import React, {useEffect, useState} from "react"
import { Route, Switch, Link } from "react-router-dom"
import NavTabs from "./components/NavTabs"
import Playlists from "./components/Playlists"
import SimpleBottomNavigation from "./components/SimpleBottomNavigation"
import ActionAreaCard from "./components/ActionAreaCard"


function App(){

  const playListApi = "http://localhost:9292/playlists"

  const [playlist, setPlaylist] = useState([])

  const [page, setPage] = useState("/")


  useEffect(()=>{
    fetch(playListApi)
    .then(r => r.json())
    .then(data => setPlaylist(data))
  }, [])


return(
  <div>
    <SimpleBottomNavigation/>
    <Switch>
      <Route exact path="/">
        <Playlists playlist={playlist} />
        {/* <ActionAreaCard/> */}
        <h2></h2>
      </Route>

    </Switch>
  </div>


)
}
export default App; 