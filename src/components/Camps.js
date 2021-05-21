import React, { useState, useEffect } from "react";
import "../App.css";
import { db, storage } from "./Firebase";
import noImage from "./images/No_Image_Available.jpg";
import { toast } from "react-toastify";

// Mui stuff
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo3 from "./images/logo3.jpg";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
// import { KeyboardDatePicker ,MuiPickersUtilsProvider} from "@material-ui/pickers";
// import DateFnsUtils from '@date-io/date-fns';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    marginTop: 10,
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
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
}))(MuiDialogContent);

export default function Camps(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [arr, setArr] = useState([]);
  const [imageAsFile, setImageAsFile] = useState("");
  const [flag, setFlag] = useState(false);
  const [address, setAddress] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setImageAsFile(e.target.files[0]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleOrganizer = (e) => {
    setOrganizer(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };
  useEffect(() => {
    db.collection("Camps").onSnapshot((doc) => {
      setArr(doc.docs);
    });
  }, []);

  const arr1 = [];

  arr.map((each) => {
    if (each.data()) {
      arr1.push({ ...each.data(), id: each.id });
    }
  });

  const handleDeleteCamp = (id) => {
    db.collection("Camps")
      .doc(id)
      .delete()
      .then(() => {
        toast.info("deleted Successfully", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleSubmit = (e) => {
    setFlag(true);
    e.preventDefault();
    const obj = {
      name: name,
      description: description,
      image: "",
      address: address,
      organizedBy: organizer,
      toDate: toDate,
      fromDate: fromDate,
    };
    if (imageAsFile) {
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      if (imageAsFile === "") {
        console.error(
          `not an image, the image file is a ${typeof imageAsFile}`
        );
      }
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("sssssssssssss", snapshot);
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              obj.image = fireBaseUrl;
              db.collection("Camps")
                .doc()
                .set(obj)
                .then(() => {
                  handleCloseForm();
                  setFlag(false);
                  setOpen(false);
                  toast.success("Added successfully", {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            })
            .catch((err) => {
              setFlag(false);
              toast.error(`${err}`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        }
      );
    } else {
      db.collection("Camps")
        .doc()
        .set(obj)
        .then(() => {
          handleCloseForm();
          setFlag(false);
          setOpen(false);
          toast.success("Added successfully", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          setFlag(false);
          toast.error(`${err}`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  return (
    <div>
      {/* Add camp dialog */}

      <Dialog
        open={openForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        aria-labelledby="form-dialog-title"
      >
        <MuiDialogContent id="form-dialog-title">Add New Camp</MuiDialogContent>
        <MuiDialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Camp Name"
            type="text"
            fullWidth
            onChange={handleName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Camp Address"
            type="text"
            fullWidth
            onChange={handleAddress}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Camp Description"
            type="text"
            fullWidth
            onChange={handleDescription}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Organized By"
            type="text"
            fullWidth
            onChange={handleOrganizer}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            <input type="file" onChange={handleImage} />{" "}
          </Button>
        </MuiDialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {flag ? <CircularProgress color="secondary" /> : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Main camp code */}
      <div className="camps_header">
        <h1 className="camps_h1">Camps</h1>
        {props.admin && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickOpenForm}
          >
            Add Camp
          </Button>
        )}{" "}
      </div>
      <hr color="red" />
      <div className="camps_flex">
        {arr1.length > 0 ? (
          arr1.map((item) => {
            return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.image || noImage}
                    title="Blood camps in collage 1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div>
                    <div className="buttonFlex">
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        View Galery
                      </Button>{" "}
                      {props.admin && (
                        <Link
                          to={{
                            pathname: "/collect_blood",
                            params: {
                              campId: item.id,
                              CampName: item.name,
                            },
                          }}
                        >
                          <Button variant="outlined" color="primary">
                            Collect Blood
                          </Button>
                        </Link>
                      )}
                      {props.admin && (
                        <div className="deleteicon">
                          <DeleteIcon
                            onClick={() => handleDeleteCamp(item.id)}
                          />
                        </div>
                      )}
                    </div>
                    <Dialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        Image Gallery
                      </DialogTitle>
                      <DialogContent dividers>
                        <div className="camps_img">
                          <div>
                            <img src={logo3} />
                            <img src={logo3} />
                            <img src={logo3} />
                          </div>
                          <div>
                            <img src={logo3} />
                            <img src={logo3} />
                            <img src={logo3} />
                          </div>
                          <div>
                            <img src={logo3} />
                            <img src={logo3} />
                            <img src={logo3} />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardActions>
              </Card>
            );
          })
        ) : (
          <CircularProgress className="av" color="secondary" />
        )}
      </div>
    </div>
  );
}
