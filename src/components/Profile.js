import React,{useEffect,useState} from 'react'
import "../App.css";
import {db} from"./Firebase"
function Profile(props) {
    // useEffect(()=>{
    //     db.collection("users").doc(props.token).get().then((data)=>{
    //       setUserdetails(data.data());
    //     })

    // })
    console.log(props.data);
    return (
        <div className="profile_h1">
            <h1>user profile</h1>
        <div className="profile">
            <div className="profile_left">
              <img src="https://picsum.photos/200/200" />
            </div>
            <div className="profile_right">
                <p> Name:{props.data.name}</p>
                <p> age: {props.data.age}</p>
                <p> gender: {props.data.gender}</p>
                <p> adderess: {props.data.adderess}</p>
                <p> gmail: {props.data.email}</p>


            </div>
            
        </div>
        </div>
    )
}

export default Profile
