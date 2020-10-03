import React ,{useState} from 'react'
import Button from "@material-ui/core/Button"
import "../App.css";
import request from "./images/request.jpg"
function Request() {
  const [name ,setName]=useState("");
  const [gender ,setGender]=useState("");
  const [age ,setAge]=useState();
  const [blood_group,setBlood_group]=useState("");
  const [email ,setEmail]=useState("");
  const [mobile ,setMobile]=useState();
  // const [all_vlaue,setAll_value]=useState({});
  
  const submit1=(e)=>{
    e.preventDefault();
    const obj1={
      name:name,
      age:age,
      blood_group:blood_group,
      gender:gender,
      mobile:mobile,
      email:email
    }
    console.log(obj1.name);
  }
    return (
        <div className="login">
          
            <h1><img src={request} className="logo4"/> Request For Blood</h1>
            <form onSubmit={submit1}>
                <p> Name <input className="name" type="text" onChange={(e)=>setName(e.target.value)} /></p><br/>
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
                <p>Email <input onChange={(e)=>setEmail(e.target.value)} className="name" type="email" /></p><br/>     
                <Button color="secondary"  variant="contained" type="submit">Submit</Button>
            </form>
            {/* {console.log(all_vlaue)} */}
      </div>
    )
}

export default Request
