import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import '../App.css'
import { useHistory } from 'react-router-dom'
import { db, auth } from './Firebase.js'
import { toast } from 'react-toastify'
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
  const history = useHistory()
  // const [all_vlaue,setAll_value]=useState({});

  const submit1 = e => {
    e.preventDefault()
    const obj1 = {
      name: name,
      age: age,
      blood_group: blood_group,
      gender: gender,
      mobile: mobile,
      email: email,
      password: password,
      adderess: adderess
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        db.collection('users')
          .doc(cred.user.uid)
          .set(obj1)
        localStorage.setItem('token', cred.user.uid)
      })
      .then(() => {
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
      <h1>Donor Registration</h1>
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
            defaultValue='male'
            onChange={e => setGender(e.target.value)}
          >
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
          >
            <option value='A+'>AB+</option>
            <option value='A-'>AB+</option>
            <option value='B+'>AB+</option>
            <option value='B-'>AB+</option>
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
      {/* {console.log(all_vlaue)} */}
    </div>
  )
}

export default D_registration
