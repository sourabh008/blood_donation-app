import React, { useEffect, useState } from 'react'
import '../App.css'
import { db } from './Firebase'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import EditIcon from '@material-ui/icons/Edit'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      color: theme.palette.text.primary
    }
  },

  large: {
    width: theme.spacing(14),
    height: theme.spacing(14)
  }
}))
function Profile (props) {
  const classes = useStyles()
  const [arr, setArr] = useState([])
  console.log(props.token)
  var arr1 = []
  useEffect(() => {
    db.collection('user_request').onSnapshot(result => {
        const temp=[];
        result.forEach(doc=>temp.push({...doc.data(),id:doc.id}))
      setArr(result.docs)
    })
  }, [])
  console.log(temp)
  arr.map(doc => {
    if (doc.data().user_id === props.token) {
      console.log(doc.id)
      arr1.push(doc.data())
    }
  })
  const delete_item = () => {
    db.collection('user_request')
      .doc(props.token)
      .delete()
      .then(() => {
        console.log('deleted')
      })
  }
  const editProfile = () => {
    alert('hello from edit')
  }
  return (
    <div className='profile_main'>
      <Card variant='outlined' className='profile_left'>
        <CardContent>
          <div>
            <h1>Your Requests</h1>
            {arr1.length > 0 ? (
              <table>
                <tr>
                  <th>Firstname</th>
                  <th>Age</th>
                  <th>Blood Group</th>
                  <th>Gender</th>
                  <th>Contact No.</th>
                  <th>Email</th>
                  <th>Till Date</th>
                </tr>
                {arr1.map(item => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.blood_group}</td>
                      <td>{item.gender}</td>
                      <td>{item.mobile}</td>
                      <td>{item.email}</td>
                      <td>{item.date}</td>
                      <Tooltip title='Delete'>
                        <IconButton onClick={delete_item} aria-label='delete'>
                          <DeleteIcon color='secondary' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Update'>
                        <IconButton onClick={delete_item} aria-label='Update'>
                          <UpdateSharpIcon />
                        </IconButton>
                      </Tooltip>
                    </tr>
                  )
                })}
              </table>
            ) : (
              <h1>No post found</h1>
            )}
          </div>
        </CardContent>
      </Card>
      <Card variant='outlined' className='profile_main2'>
        <CardContent>
          <div className='profile'>
            <div className={classes.root}>
              <Avatar
                alt='Remy Sharp'
                src='https://picsum.photos/200/200'
                className={classes.large}
              />
            </div>
            <div className='profile_right'>
              <h2>{props.data.name}</h2>
            </div>
            <div>
              <Tooltip title='Edit'>
                <IconButton onClick={editProfile} aria-label='Edit'>
                  <EditIcon color='secondary' />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className='profile_bottom_table'>
            <table className='profile_table'>
              <tr>
                <td>Age</td>
                <td>{props.data.age}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{props.data.gender}</td>
              </tr>{' '}
              <tr>
                <td>Adderess</td>
                <td>{props.data.adderess}</td>
              </tr>{' '}
              <tr>
                <td>Gmail</td>
                <td> {props.data.email}</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td> {props.data.blood_group}</td>
              </tr>
              <tr>
                <td>Mobile No.</td>
                <td> {props.data.mobile}</td>
              </tr>
              <tr>
                <td>Adderess</td>
                <td> {props.data.adderess}</td>
              </tr>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
