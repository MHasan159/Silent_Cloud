import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      margin:"",
      width: "400px",
      height:"75px",
      textAlign: 'center',
      backgroundColor: "#DAC8C2"
  },
  box:{
    marginTop: "15px"
  }
}));


function SongsGrid({songs}){
    
    const classes = useStyles()

    const mappedItems = songs.map((song)=>{
        return(
            
        <Grid item >
            <Paper className={classes.root} >{song.artist.image_url}{song.artist.name} <br/> {song.title} </Paper>
        </Grid>
        )
    })

    return(
        <Box className={classes.box}>
            <Grid container spacing={7}>{mappedItems}</Grid>
        </Box>
    )
}

export default SongsGrid