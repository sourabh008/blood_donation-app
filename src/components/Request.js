import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import '../App.css'
import request from './images/request.jpg'
import { useHistory } from 'react-router-dom'
import { db } from './Firebase'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function Request (props) {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const [blood_group, setBlood_group] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState()
  const [date, setDate] = useState()
  const history = useHistory()

  const submit1 = e => {
    e.preventDefault()
    const obj1 = {
      name: name,
      age: age,
      blood_group: blood_group,
      gender: gender,
      mobile: mobile,
      email: email,
      date: date,
      user_id: props.token
    }
    db.collection('user_request')
      .doc()
      .set(obj1)
      .then(callback => {
        history.push('/')
        toast.info('Request Submitted Successfully', {
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
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
  }
  return (
    <div className='login'>
      <h1>
        <img src={request} alt="request" className='logo4' /> Request For Blood
      </h1>
      <form onSubmit={submit1}>
        <p>
          {' '}
          Name{' '}
          <input
            className='name'
            type='text'
            onChange={e => setName(e.target.value)}
            required
          />
        </p>
        <p>
          Gender{' '}
          <select
            className='select_gender'
            defaultValue=''
            onChange={e => setGender(e.target.value)}
          >
            <option>none</option>
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
            required
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
            required
          >
            <option>select</option>
            <option value='A+'>AB+</option>
            <option value='A-'>AB+</option>
            <option value='B+'>AB+</option>
            <option value='B-'>AB+</option>
            <option value='AB+'>AB+</option>
            <option value='AB-'>AB-</option>
            <option value='o+'>o+</option>
            <option value='o-'>o-</option>
          </select>
        </p>
        <p>
          Email{' '}
          <input
            onChange={e => setEmail(e.target.value)}
            className='name'
            type='email'
            required
          />
        </p>
        <p>
          Till date{' '}
          <input
            onChange={e => setDate(e.target.value)}
            className='select_gender'
            type='date'
            required
          />
        </p>

        <Button color='secondary' variant='contained' type='submit'>
          {' '}
          Make Request
        </Button>
      </form>
      {/* {console.log(all_vlaue)} */}
    </div>
  )
}

export default Request
