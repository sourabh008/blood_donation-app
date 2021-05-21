import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

import { db } from './Firebase'

import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

function View_request (props) {

  const [arr, setArr] = useState([])

  useEffect(() => {
    db.collection('contects').onSnapshot(result => {
      setArr(result.docs)
    })
  }, [])

  const delete_item = values => {
    db.collection('contects')
      .doc(values)
      .delete()
      .then(() => {
        toast.info('deleted Successfully', {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
  }

  return (
    <div className='view_req_box'>
      <h1>Messages from users</h1>
      {arr.length>0 ?<table>
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>

        {arr.map(item => {
          return (
            <tr>
              <td>{item.data().username}</td>
              <td>{item.data().email}</td>
              <td>{item.data().feedback}</td>  
              <Tooltip title='Delete'>
                        <IconButton
                          onClick={() => delete_item(item.id)}
                          aria-label='delete'
                        >
                          <DeleteIcon color='secondary' />
                        </IconButton>
                      </Tooltip>          
            </tr>
          )
        })}
      </table>:<CircularProgress className="viewRequestLoader" color="secondary" />}

      
    </div>
  )
}

export default View_request
