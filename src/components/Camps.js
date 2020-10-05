import React from 'react';
import "../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo3 from "./images/logo3.jpg";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:10,
  },
  media: {
    height: 250,
  },
});
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Camps() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
  return (
      <div >
        <h1 className="camps_h1">Camps</h1>
        <hr color="red"/>
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
        
      <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Galery
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Image Gallery
        </DialogTitle>
        <DialogContent dividers>
        <div className="camps_img">
          <div> 
          <img src={logo3}/>
          <img src={logo3}/>
          <img src={logo3}/></div>
         <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/></div>
          <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/>
        </div>
        </div>

        </DialogContent>
         
      </Dialog>
    </div>      
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
      <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Galery
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Image Gallery
        </DialogTitle>
        <DialogContent dividers>
        <div className="camps_img">
          <div> 
          <img src={logo3}/>
          <img src={logo3}/>
          <img src={logo3}/></div>
         <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/></div>
          <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/>
        </div>
        </div>

        </DialogContent>
         
      </Dialog>
    </div>      
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
      <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Galery
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Image Gallery
        </DialogTitle>
        <DialogContent dividers>
        <div className="camps_img">
          <div> 
          <img src={logo3}/>
          <img src={logo3}/>
          <img src={logo3}/></div>
         <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/></div>
          <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/>
        </div>
        </div>

        </DialogContent>
         
      </Dialog>
    </div>      
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
      <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Galery
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Image Gallery
        </DialogTitle>
        <DialogContent dividers>
        <div className="camps_img">
          <div> 
          <img src={logo3}/>
          <img src={logo3}/>
          <img src={logo3}/></div>
         <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/></div>
          <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/>
        </div>
        </div>

        </DialogContent>
         
      </Dialog>
    </div>      
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
      <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Galery
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Image Gallery
        </DialogTitle>
        <DialogContent dividers>
        <div className="camps_img">
          <div> 
          <img src={logo3}/>
          <img src={logo3}/>
          <img src={logo3}/></div>
         <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/></div>
          <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/>
        </div>
        </div>

        </DialogContent>
         
      </Dialog>
    </div>      
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
      <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Galery
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Image Gallery
        </DialogTitle>
        <DialogContent dividers>
        <div className="camps_img">
          <div> 
          <img src={logo3}/>
          <img src={logo3}/>
          <img src={logo3}/></div>
         <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/></div>
          <div>
         <img src={logo3}/>
         <img src={logo3}/>
          <img src={logo3}/>
        </div>
        </div>

        </DialogContent>
         
      </Dialog>
    </div>      
      </CardActions>
    </Card>
    </div>
    </div>
  );
}