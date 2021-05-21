import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { db } from './Firebase'
import IconButton from '@material-ui/core/IconButton'
import {  toast } from 'react-toastify'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'
import 'react-toastify/dist/ReactToastify.css'
import Typography from '@material-ui/core/Typography'
// import '../App.css'

const useStyles = makeStyles({
  root: {
    Width: 75,
    backgroundColor: 'rgb(231, 237, 247)'
  }
})
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)
function Blood_donated (props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [name, setName] = useState()
  const [unit, setUnit] = useState()
  const [email, setEmail] = useState()
  const [date, setDate] = useState()
  const [arr, setArr] = useState([])

  const handleClickOpen = values => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    db.collection('blood_donated').onSnapshot(doc => {
      setArr(doc.docs)
    })
  }, [])
  const arr1 = []
  arr.map(each => {
    if (each.data().user_id === props.token) {
      arr1.push(each.data())
    }
  })
  const submit = (e) => {
    e.preventDefault()
    const obj = {
      name: name,
      unit: unit,
      email: email,
      date: date,
      userName:props.userName,
      user_id: props.token
    }
    db.collection('blood_donated')
      .doc()
      .set(obj)
      .then(() => {
        setOpen(false)
        toast.success("Added successfully", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });    
      })
  }
  return (
    <div className='blood_donated'>
      <Card className={classes.root}>
        <h1>Blood Donated</h1>
        <hr />
        <CardContent>
       { (arr1.length) ?
          <table className='donate_table'>
            <tr>
              <th>Camp Name</th>
              <th>Date</th>
              <th>No Of Unit</th>
              <th>Email Id</th>
            </tr>
            {arr1.map(val => {
              return (
                <tr>
                  <td>{val.name}</td>
                  <td>{val.date}</td>
                  <td>{val.unit}</td>
                  <td>{val.email}</td>
                </tr>
              )
            })
          }
          </table>:
          <h4>You do not have any blood donated history</h4>
              
          }
        </CardContent>
        <CardActions>
          <Button variant='contained' color='primary' onClick={handleClickOpen}>
            <AddCircleIcon />
            Add
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby='customized-dialog-title'
            open={open}
          >
            <DialogTitle id='customized-dialog-title' onClose={handleClose}>
              Update Request
            </DialogTitle>
            <DialogContent dividers>
              {/* update profile html */}
              <form onSubmit={submit}>
                <p>
                  {' '}
                  Camp Name{' '}
                  <input
                    className='name'
                    type='text'
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </p>
                <p>
                  No Of Unit{' '}
                  <input
                    className='name'
                    type='number'
                    onChange={e => setUnit(e.target.value)}
                    required
                  />{' '}
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
                   date{' '}
                  <input
                    onChange={e => setDate(e.target.value)}
                    className='select_gender'
                    type='date'
                    required
                  />
                </p>

                <Button color='secondary' variant='contained' type='submit'>
                  {' '}
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  )
}

export default Blood_donated
