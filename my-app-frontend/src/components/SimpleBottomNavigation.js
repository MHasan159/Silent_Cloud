import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useHistory } from 'react-router-dom';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const history = useHistory()

  function handleClick(e){
    history.push(e.target.name)
  }
  
  return (
    <Box sx={{ width: 1800}}>
      <BottomNavigation
        style={{backgroundColor: "#746666", height:90, width:1980}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Playlists" name="/" onClick={handleClick} icon={<PlaylistPlayIcon  />} />
        <BottomNavigationAction label="Artists" name="/artists" onClick={handleClick} icon={<PersonPinIcon/>} />
        <BottomNavigationAction label="Songs" name="/songs" onClick={handleClick} icon={<LibraryMusicIcon />} />
      </BottomNavigation>
    </Box>
  );
}
