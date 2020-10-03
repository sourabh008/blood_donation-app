import React,{useState} from 'react'
import Button from "@material-ui/core/Button";
import {auth} from "./Firebase"
import "../App.css";
import { useHistory } from 'react-router-dom';
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const history =useHistory();

    const submit1=(e)=>{
        e.preventDefault();
      
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            history.push("/");
        }).catch(err=>{
            console.log(err)
        })

    }
    return (
        <div className="main_login">
            <h1>Login</h1>
            <form onSubmit={submit1}>
            <p>Email <input onChange={(e)=>setEmail(e.target.value)} className="name" type="email" /></p><br/>
            <p>Password <input onChange={(e)=>setPassword(e.target.value)} className="password" type="password" /></p> 
            <Button color="secondary"  variant="contained" type="submit">Login</Button>    
            </form>
        </div>
    )
}

export default Login
