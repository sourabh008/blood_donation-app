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
import { ToastContainer, toast } from 'react-toastify'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import 'react-toastify/dist/ReactToastify.css'
import logo3 from './images/logo3.jpg'
import { useHistory } from 'react-router-dom'


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
const useStyles1 = makeStyles(theme => ({
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

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(20)
  }
}))(MuiDialogActions)
const useStyles = makeStyles({
  root: {
    minWidth: 245,
    marginTop: 10
  },
  media: {
    height: 250
  }
})
function Profile (props) {
  //new dialog area


  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const [blood_group, setBlood_group] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState()
  const [date, setDate] = useState();
  const [token,setToken]=useState();
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
      .doc(token)
      .set(obj1)
      .then(callback => {
        history.push('/profile')
        handleClose();
        toast.success('Profile Updated Successfully', {
          position: 'top-left',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        })
      })
      .catch(err => {
        toast.error(`${err}`, {
          position: 'top-left',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
  }
  // const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = (values) => {
    setToken(values);
    setOpen(true)
    db.collection("user_request").doc(values).get()
    .then(doc=>{
      setName(doc.data().name);
      setAge(doc.data().age);
      setDate(doc.data().date)
      setEmail(doc.data().email)
      setGender(doc.data().gender)
      setMobile(doc.data().mobile)
      setBlood_group(doc.data().blood_group)
      console.log(doc.data().age)
    })
  }
  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles1()
  const [arr, setArr] = useState([])
  // const history = useHistory()
  var arr1 = []
  useEffect(() => {
    db.collection('user_request').onSnapshot(result => {
      const temp = []
      result.docs.forEach(doc => temp.push({ ...doc.data(), id: doc.id }))

      setArr(temp)
    })
  }, [])
  arr.map(doc => {
    if (doc.user_id === props.token) {
      arr1.push(doc)
    }
  })
  const delete_item = (values) => {
    db.collection('user_request').doc(values).delete().then(()=>{
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
                        <IconButton onClick={()=>delete_item(item.id)} aria-label='delete'>
                          <DeleteIcon color='secondary' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Update'>
                        <IconButton onClick={()=>handleClickOpen(item.id)} aria-label='Update'>
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
            <hr/>
              <Dialog
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}
              >
                <DialogTitle id='customized-dialog-title' onClose={handleClose}>
                  Update Profile
                </DialogTitle>
                <DialogContent dividers>
{/* update profile html */}
<form onSubmit={submit1}>
        <p>
          {' '}
          Name{' '}
          <input
            className='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </p>
        <p>
          Gender{' '}
          <select
            className='select_gender'
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option >none</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>{' '}
        </p>
        <p>
          Age{' '}
          <input
            onChange={e => setAge(e.target.value)}
            value={age}
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
            value={mobile}
            type='tel'
          />
        </p>
        <p>
          Blood group
          <select
            className='select_bloodgroup'
            onChange={e => setBlood_group(e.target.value)}
            value={blood_group}
            required
          >
            <option >select</option>
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
            value={email}
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
            value={date}
            required
          />
        </p>

        <Button color='secondary' variant='contained' type='submit'>
          {' '}
          Update
        </Button>
      </form>
                </DialogContent>
              </Dialog>
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
           {/* profile edit */}

            <div>
              <Tooltip title='Edit'>
                <IconButton  aria-label='Edit'>
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
