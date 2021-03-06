import React, { useEffect, useState } from 'react'
import { db } from './Firebase'
import CircularProgress from '@material-ui/core/CircularProgress';

function View_request (props) {
  const [arr, setArr] = useState([])
  useEffect(() => {
    db.collection('user_request').onSnapshot(result => {
      setArr(result.docs)
    })
  }, [])

  return (
    <div className='view_req_box'>
      <h1>Requests For Blood</h1>
      {arr.length>0 ?    <table>
        <tr>
          <th>Firstname</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>Gender</th>
          <th>Contact No.</th>
          <th>Email</th>
          <th>Till Date</th>
          <th>Address</th>
        </tr>

        { arr.map(item => {
          return (
            <tr>
              <td>{item.data().name}</td>
              <td>{item.data().age}</td>
              <td>{item.data().blood_group}</td>
              <td>{item.data().gender}</td>
              <td>{item.data().mobile}</td>
              <td>{item.data().email}</td>
              <td>{item.data().date}</td>
              <td>{item.data()?.address}</td>
            </tr>
          )
        })}
      </table>
      :<CircularProgress className="viewRequestLoader" color="secondary" />}
   
    </div>
  )
}

export default View_request
