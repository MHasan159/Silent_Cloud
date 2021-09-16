import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard({playlist}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={playlist.image_url}
          alt="Cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {playlist.playlist_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Visits:{playlist.visits}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}