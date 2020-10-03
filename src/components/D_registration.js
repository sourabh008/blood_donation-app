import React ,{useState} from 'react'
import Button from "@material-ui/core/Button"
import "../App.css"
import { useHistory } from 'react-router-dom';
import {db,auth} from "./Firebase.js"
function D_registration(props) {
  const [name ,setName]=useState("");
  const [gender ,setGender]=useState("");
  const [age ,setAge]=useState();
  const [blood_group,setBlood_group]=useState("");
  const [email ,setEmail]=useState("");
  const [mobile ,setMobile]=useState();
  const [password ,setPassword]=useState();
  const [adderess ,setAdderess]=useState("");
  const [user_auth,setUser_auth]=useState("false");
  const history =useHistory();
  // const [all_vlaue,setAll_value]=useState({});
  
  const submit1=(e)=>{
    e.preventDefault();
    const obj1={
      name:name,
      age:age,
      blood_group:blood_group,
      gender:gender,
      mobile:mobile,
      email:email,
      password:password,
      adderess:adderess
    }
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
       db.collection('users').doc(cred.user.uid).set(obj1);
      localStorage.setItem('token',cred.user.uid);
    }).then(() => {   
      history.push("/");
      console.log("successfull");

     })

    setUser_auth("true");

  }
    return (
        <div className="login">
          
            <h1>Donor Registration</h1>
            <form onSubmit={submit1}>
                <p>Donor Name <input className="name1" type="text" onChange={(e)=>setName(e.target.value)} /></p><br/>
                <p>Gender <select className="select_gender" onChange={(e)=>setGender(e.target.value)}>
                  <option value="male">male</option>
                  <option value="female">female</option>      
                </select> </p><br/>
                <p>Age <input onChange={(e)=>setAge(e.target.value)} className="age" type="number" /></p><br/>
                <p>Mobile No. <input onChange={(e)=>setMobile(e.target.value)} className="mobile" type="tel" /></p><br/>
                <p>Blood group<select className="select_bloodgroup" onChange={(e)=>setBlood_group(e.target.value)}>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select></p><br/>
                <p>Email <input onChange={(e)=>setEmail(e.target.value)}className="name" type="email" /></p><br/>     
                <p>Password <input onChange={(e)=>setPassword(e.target.value)}className="password" type="password" /></p><br/>     
                <p>Adderess <input onChange={(e)=>setAdderess(e.target.value)}className="password" type="text" /></p><br/>     
                <Button color="secondary"  variant="contained" type="submit">Submit</Button>
            </form>
            {/* {console.log(all_vlaue)} */}
           
      </div>
    )
}

export default D_registration
