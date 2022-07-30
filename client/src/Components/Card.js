import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import {getAllBooks} from '../Redux/Actions'



export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
        Book Name
      </Typography>
      <Typography sx={{ textAlign: 'center' }} color="text.secondary">
        Author
      </Typography>
      <Typography sx={{ textAlign: 'center',fontWeight: 'light' }}>
        Type
      </Typography>
      <Grid container justify="center">
        <CardMedia
          component="img"
          sx={{ height: "50%", width: "50%" }}
          image="https://tinyurl.com/553zjfwf"
          alt="green iguana"
        />
      </Grid>
      <CardContent>
        <Typography sx={{ fontWeight: 'bold' , textAlign: 'center' }} variant="h6" color="text.primary">
          Price
        </Typography>


      </CardContent>
      <CardActions>
        <Grid container justify="center">
          <Button variant="contained" href="/details" size="small" >See Description</Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
