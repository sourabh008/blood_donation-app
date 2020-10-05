import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import "../App.css";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import {auth} from "./Firebase"
  import { useHistory } from 'react-router-dom';
  toast.configure();

function Navbar(props) {
  const history =useHistory();
  const logout=()=>{
    auth.signOut();
    history.push("/");
    toast.success("You LoggedOut successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }); 
 }
    return (
        <div>
            {(props.auth==='false')?
            <div className="nav"> <div  className="ab"><Link to="/">Home</Link></div>
            <div className="ab"><Link to="/donor_registration">Donor Registration</Link></div>
            <div className="ab"><Link to="/login">Login</Link></div>
            {/* <div className="ab"><Link to="/send_request">Send Request</Link></div> */}
            <div className="ab"><Link to="/view_request">View Request</Link></div>
            <div className="ab"><Link to="/camps">Camps</Link></div>
          <div className="ab"><Link to="/contect_us">Contect Us</Link></div>
          <div className="ab"><Link to="/about">About Us</Link></div>
       </div>:<div className="nav">
               <div  className="ab"><Link to="/">Home</Link></div>
               <div className="ab"><Link to="/send_request">Send Request</Link></div>
               <div className="ab"><Link to="/view_request">View Request</Link></div>
               <div className="ab"><Link to="profile">Profile</Link></div>
               <div className="ab"><Link to="/camps">Camps</Link></div>
               <div className="ab"><Link to="/contect_us">Contect Us</Link></div>
               <div className="ab"><Link to="/about">About Us</Link></div>
               <div className="ab"><Link onClick={logout}>Logout</Link></div>

       </div>
                

           }
           </div>
    
    )
}

export default Navbar
