import React,{useState} from 'react'
import Button from "@material-ui/core/Button";
import "../App.css";
import {db} from "./Firebase";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure();
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
        db.collection("contects").doc().set(obj1).then(result=>{
            toast.info("Problem Recorded", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });  
                setEmail("");
                setFeedback("");
                setUsername("");        
            }).catch(err=>{
                toast.error(`${err}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });  
            })
    }
    return (
        <div className="main_login">
            <h1>Contect us</h1>
            <form onSubmit={submit1}>
            <p>Username <input onChange={(e)=>setUsername(e.target.value)} value={username} className="password" type="text" required /></p><br/>
            <p>Email <input onChange={(e)=>setEmail(e.target.value)} className="name"  value={email}type="email" required/></p><br/>
            <TextareaAutosize aria-label="minimum height" rowsMin={3}  onChange={(e)=>setFeedback(e.target.value)}  value={feedback} placeholder="Enter your problem" className="feedback" required/>
<br/>
            <Button color="secondary"  variant="contained" type="submit">Submit</Button>    
            </form>
        </div>
    )
}

export default Contect
