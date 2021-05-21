import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import D_registration from "./components/D_registration";
import Request from "./components/Request";
import Contect from "./components/Contect";
import View_request from "./components/View_request";
import Camps from "./components/Camps";
import Blood_donated from "./components/Blood_donated";
import { db, auth } from "./components/Firebase.js";
import AdminLogin from "./components/AdminLogin";
import MessagesList from "./components/MessagesList";
import BloodDonatedHistory from "./components/BloodDonatedList";
import logo from './components/images/bloodimg.png'
import CollectBlood from "./components/CollectBlood/CollectBlood";


function App() {
  const [auth2, setAuth2] = useState("false");
  const [admin, setAdmin] = useState(false);
  const [userdetails, setUserdetails] = useState({});
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .onSnapshot((snapshoot) => {
            setLoading(false);
            if (snapshoot.data()) {
              setAuth2("true");
              if (snapshoot.data().email === "sk@gmail.com") {
                setAdmin(true);
              } else {
                setAdmin(false);
              }
            }
            setUserdetails(snapshoot.data());
            setUid(user.uid);
          });
      } else {
        setLoading(false);
        setAuth2("false");
      }
    });
  }, []);
  return (
    <div className="App">
      {loading ? (<div className="homePageLoader">
      <img src={logo} alt='logo' className='logoLoader' />
        <CircularProgress className='homeLoader' color="secondary" />
      </div>
        
      ) : (
        <Router>
          <Header />
          <Navbar auth={auth2} admin={admin} />
          <Switch>
            <Route exact path="/">
              <Home admin={admin} />
            </Route>
            <Route exact path="/collect_blood" component={CollectBlood}/>
              {/* <CollectBlood />
            </Route> */}
            <Route path="/donor_registration">
              <D_registration />
            </Route>
            <Route path="/send_request">
              <Request token={uid} admin={admin} />
            </Route>
            <Route path="/view_request">
              <View_request token={uid} admin={admin} />
            </Route>
            <Route path="/camps">
              <Camps admin={admin} />
            </Route>
            <Route path="/blood_donated_history">
              <BloodDonatedHistory />
            </Route>
            <Route path="/messagesList">
              <MessagesList admin={admin} />
            </Route>
            <Route path="/gallery">
              <Camps admin={admin} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <AdminLogin />
            </Route>
            <Route path="/profile">
              <Profile token={uid} data={userdetails} admin={admin} />
            </Route>
            <Route path="/contect_us">
              <Contect admin={admin} />
            </Route>
            <Route path="/blood_donated">
              <Blood_donated
                token={uid}
                userName={userdetails?.name}
                admin={admin}
              />
            </Route>
            <Route path="/about">
              <About admin={admin} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
