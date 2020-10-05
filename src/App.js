import React, { useState,useEffect } from 'react';
import firebase from "firebase";
import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import D_registration from "./components/D_registration";
import Request from "./components/Request";
import Contect from "./components/Contect";
import View_request from "./components/View_request";
import Camps from "./components/Camps";
import {db ,auth} from "./components/Firebase.js"
function App() {
  const [auth2,setAuth2]=useState('false');
  const [userdetails,setUserdetails]=useState({});
  const [uid,setUid]=useState("");
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
    db.collection('users').doc(user.uid).get().then(doc => {
      setAuth2("true");
      setUserdetails(doc.data());
      setUid(user.uid);
    })
  }else{
    setAuth2("false");
  }
  })

  }, [])
  return (
    <div className="App"> 
      <Router>
      <Header/>
       <Navbar auth={auth2}/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route  path="/donor_registration">
          <D_registration/>
          </Route>
        <Route path="/send_request">
            <Request  token={uid}/>
        </Route>
        <Route path="/view_request">
          <View_request token={uid} />
        </Route>
        <Route path="/camps">
          <Camps/>
        </Route>
        <Route path="/gallery">
          <Camps/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profile  token={uid} data={userdetails}/>
        </Route>
        <Route path="/contect_us">
          <Contect/>
        </Route>
        </Switch>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
