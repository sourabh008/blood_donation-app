import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import '../App.css'
import { useHistory } from 'react-router-dom'
import { db, auth,storage } from './Firebase.js'
import { toast } from 'react-toastify'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function D_registration (props) {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const [blood_group, setBlood_group] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState()
  const [password, setPassword] = useState()
  const [adderess, setAdderess] = useState('')
  const [user_auth, setUser_auth] = useState('false')
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState("")
    const [url,setUrl]=useState();
  const history = useHistory()
  // const [all_vlaue,setAll_value]=useState({});
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
}
console.log(imageAsFile)

  const submit1 = e => {
    e.preventDefault()
    // const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        db.collection('users')
        .doc(cred.user.uid)
        .set({
          name: name,
          age: age,
          blood_group: blood_group,
          gender: gender,
          mobile: mobile,
          email: email,
          password: password,
          adderess: adderess,
        })
        // if(imageAsFile === '' ) {
        //   console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        // }
        // uploadTask.on('state_changed', 
        // (snapShot) => {
        //   //takes a snap shot of the process as it is happening
        //   console.log(snapShot)
        // }, (err) => {
        //   //catches the errors
        //   console.log(err)
        // }, () => {
        //   // gets the functions from storage refences the image storage in firebase by the children
        //   // gets the download url then sets the image from firebase as the value for the imgUrl key:
        //   storage.ref('images').child(imageAsFile.name).getDownloadURL()
          //  .then(fireBaseUrl => {
          //    console.log("regiserd")
           
          //    setUrl(fireBaseUrl)
          //  })
        })     
      
         
      // localStorage.setItem('token', cred.user.uid)
    .then(() => {
  //     const sgMail = require('@sendgrid/mail');
  //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //     const msg = {
  //       to: 'test@example.com',
  //       from: 'test@example.com',
  //       subject: 'Sending with SendGrid is Fun',
  //       text: 'and easy to do anywhere, even with Node.js',
  //       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //     };
  
  // sgMail.send(msg);
  
      history.push('/')
      toast.info('You Registered Successfully', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    })
    .catch(err => {
      toast.error(`${err}`, {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    })
    setUser_auth('true')
  }
  return (
    <div className='login'>
      <Card variant='outlined' className="card">
        <CardContent>
      <h1>User Registration</h1>
      <form onSubmit={submit1}>
        <p>
          Donor Name{' '}
          <input
            className='name1'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </p>
        <p>
          Gender{' '}
          <select
            className='select_gender'
            onChange={e => setGender(e.target.value)}
          >
                        <option >select</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>{' '}
        </p>
        <p>
          Age{' '}
          <input
            onChange={e => setAge(e.target.value)}
            className='age'
            type='number'
          />
        </p>
        <p>
          Mobile No.{' '}
          <input
            onChange={e => setMobile(e.target.value)}
            className='mobile'
            type='tel'
          />
        </p>
        <p>
          Blood group
          <select
            className='select_bloodgroup'
            onChange={e => setBlood_group(e.target.value)}
          required>
            <option>select</option>
            <option value='A+'>A+</option>
            <option value='A-'>A-</option>
            <option value='B+'>B+</option>
            <option value='B-'>B-</option>
            <option value='AB+'>AB+</option>
            <option value='AB-'>AB-</option>
            <option value='O+'>O+</option>
            <option value='O-'>O-</option>
          </select>
        </p>
        <p>
          Email{' '}
          <input
            onChange={e => setEmail(e.target.value)}
            className='name'
            type='email'
          />
        </p>
        <p>
          Password{' '}
          <input
            onChange={e => setPassword(e.target.value)}
            className='password'
            type='password'
          />
        </p>
        <p>
          Adderess{' '}
          <input
            onChange={e => setAdderess(e.target.value)}
            className='password'
            type='text'
          />
        </p>
        <Button color='secondary' variant='contained' type='submit'>
          Submit
        </Button>
      </form>
      </CardContent>
      </Card>
    </div>
  )
}

export default D_registration
