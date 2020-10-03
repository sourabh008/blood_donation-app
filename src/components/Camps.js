import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo3 from "./images/logo3.jpg";
import {Link} from "react-router-dom"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:10,
  },
  media: {
    height: 250,
  },
});

export default function Camps() {
  const classes = useStyles();

  return (
      <div>
      <div className="camps_flex">
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Blood camps in collage 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camp Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary"><Link to="/gallery"> View Gallery</Link>
         
        </Button>
      </CardActions>
    </Card>
    
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Blood camps in collage 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camp Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          View Gallery
        </Button>
      </CardActions>
    </Card> 
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Blood camps in collage 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camp Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          View Gallery
        </Button>
      </CardActions>
    </Card>
    </div>  
    {/* next div */}

    <div className="camps_flex">
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Blood camps in collage 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camp Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          View Gallery
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Blood camps in collage 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camp Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          View Gallery
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Blood camps in collage 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camp Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          View Gallery
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}