import React,{useState} from 'react'
import Button from "@material-ui/core/Button";
import {auth} from "./Firebase"
import "../App.css";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
toast.configure();

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const history =useHistory();

    const submit1=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            history.push("/");
            console.log(cred)
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
        }).catch(err=>{
            toast.error(`${err}`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });          })

    }
    return (
        <div className="main_login">
            <h1>Login</h1>
            <form onSubmit={submit1}>
            <p>Email <input onChange={(e)=>setEmail(e.target.value)} className="name" type="email" /></p><br/>
            <p>Password <input onChange={(e)=>setPassword(e.target.value)} className="password" type="password" /></p> 
            <Button color="secondary"  variant="contained" type="submit">Login</Button>
            {/* <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>     */}
            </form>
        </div>
    )
}

export default Login
