import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';


export default function ActionAreaCard({model, setPlaylist, removePlaylist}) {
    let history = useHistory()

    function handleDelete(e){
        e.stopPropagation()
        fetch(`http://localhost:9292/delete_playlist/${model.id}`, {
            method: "DELETE",
            header: { "content-type": "application/json"},
          }) .then(r=> r.json())
          .then(data => {
                removePlaylist(model.id)          
            })
        return
    }

    function addDelete(){
        if(model.playlist_name){
        return<Button onClick={handleDelete} size="small" variant="outlined">Delete</Button>
    }}
    
    function handleChange(){
        if(model.playlist_name){
            history.push(`/playlists/${model.id}`)
        }else{
            history.push(`/artist/${model.id}`)
        }

    }
    
  return (
    <Card onClick={handleChange} sx={{ maxWidth: 250, minWidth: 250, marginLeft: 30, marginTop: 7}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={model.image_url}
          alt="Cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {model.playlist_name}
            {model.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {model.visits}
          </Typography>
          { addDelete() }
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}