import React,{useState} from 'react'
import Button from "@material-ui/core/Button";
import "../App.css";
function Contect() {
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [feedback,setFeedback]=useState('');

    const submit1=(e)=>{
        e.preventDefault();
        const obj1={
         username:username,
          email:email,
          feedback:feedback
        }
    }
    return (
        <div className="main_login">
            <h1>Contect us</h1>
            <form onSubmit={submit1}>
            <p>Username <input onChange={(e)=>setUsername(e.target.value)} className="password" type="text" /></p><br/>
            <p>Email <input onChange={(e)=>setEmail(e.target.value)} className="name" type="email" /></p><br/>
            <p>Tell us your problem <input onChange={(e)=>setFeedback(e.target.value)} className="feedback" type="text" /></p><br/>
            <Button color="secondary"  variant="contained" type="submit">Submit</Button>    
            </form>
        </div>
    )
}

export default Contect
