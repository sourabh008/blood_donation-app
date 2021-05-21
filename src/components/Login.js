import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { auth } from "./Firebase";
import "../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
toast.configure();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const submit1 = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        setLoading(false);
        history.push("/");
        toast.success("Welcome again", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // toast("wow nice",{position:toast.POSITION.TOP_LEFT})
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`${err}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="main_login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={submit1} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {!loading ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            ) : (
              <CircularProgress className="loginLoader" color="secondary" />
            )}
          </form>
        </div>
      </Container>
    </div>

    // <div className="main_login">
    //   <Card variant="outlined" className="card">
    //     <CardContent>
    //       <h1>Login</h1>
    //       <form onSubmit={submit1}>
    //         <p>
    //           Email{" "}
    //           <input
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="name"
    //             type="email"
    //           />
    //         </p>
    //         <br />
    //         <p>
    //           Password{" "}
    //           <input
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="password"
    //             type="password"
    //           />
    //         </p>
    //         {!loading ? (
    //           <Button color="secondary" variant="contained" type="submit">
    //             Login
    //           </Button>
    //         ) : (
    //           <CircularProgress
    //             className="loginLoader"
    //             color="secondary"
    //           />
    //         )}

    //         <Link to="/admin">
    //           <p>login as admin</p>
    //         </Link>
    //       </form>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}

export default Login;
