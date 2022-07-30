import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@material-ui/core/Grid';


const Styles = {

}


export default function BookCard() {
  return (
    <div style={{ display: 'flex', alignItems: "center", marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "50px" }} >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Card sx={{}}>
            <CardContent>
              <Typography variant="h5" component="div">
                BookName
              </Typography>
              <Typography sx={{}} color="text.secondary">
                Author
              </Typography>
              <Typography sx={{}} color="text.secondary">
                Book Type
              </Typography>
              <CardMedia
                component="img"
                sx={{ width: '50%', height: '50%' }}
                image="https://tinyurl.com/553zjfwf"
                alt="book image"
              />
            </CardContent>
            <Typography sx={{
            }} variant="h6" color="text.primary">
              Price
            </Typography>
            <CardActions>
              <Button sx={{ Styles }} variant="contained" href="/details" size="small" >See Description</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
          <Card >
            <CardContent>
              <Typography variant="h5" component="div">
                BookName
              </Typography>
              <Typography sx={{ mt: 1 }} color="text.secondary">
                Author
              </Typography>
              <CardMedia
                component="img"
                sx={{ width: '50%', height: '50%' }}
                image="https://tinyurl.com/553zjfwf"
                alt="book image"
              />
            </CardContent>
            <Typography sx={{
            }} variant="h6" color="text.primary">
              Price
            </Typography>
            <CardActions>
              <Button sx={{ Styles }} variant="contained" href="/details" size="small" >See Description</Button>
            </CardActions>
          </Card>


        </div>


        );
}
