import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard({model}) {
  return (
    <Card sx={{ maxWidth: 250, minWidth: 250, marginLeft: 30, marginTop: 7}}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}