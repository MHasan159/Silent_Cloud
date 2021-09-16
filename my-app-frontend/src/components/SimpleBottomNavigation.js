import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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
        <BottomNavigationAction label="Playlists" icon={<PlaylistPlayIcon />} containerElement={<NavLink to="playlists" />}  />
        <BottomNavigationAction label="Artists" icon={<PersonPinIcon/>} />
        <BottomNavigationAction label="Songs" icon={<LibraryMusicIcon />} />
      </BottomNavigation>
    </Box>
  );
}
