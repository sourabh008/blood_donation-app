import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import "./style.css";
import { db } from "../Firebase";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DataTable from "./Table";

// mui stuff

import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CollectBlood(props) {
  const classes = useStyles();

  const [id, setId] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState(0);
  const [bloodGroup, setBloodGroup] = useState("");
  const [status, setStatus] = useState("Pending");
  const [arr, setArr] = useState([]);
  const [disable, setDisable] = useState(false);
  const [update, setUpdate] = useState(false);
  const history = useHistory();

  useEffect(() => {
    db.collection("donatedMembers").onSnapshot((doc) => {
      setArr(doc.docs);
    });
  }, []);
  if (!props.location?.params?.campId) {
    history.push("/camps");
    return null;
  }
  let { campId, CampName } = props.location.params;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);

    const obj = {
      campId: campId,
      name: name,
      email: email,
      units: unit,
      bloodGroup: bloodGroup,
      age: age,
      address: address,
      status: status,
      campName: CampName,
    };

    db.collection("donatedMembers")
      .doc()
      .set(obj)
      .then(() => {
        handleCloseForm();
        setFlag(false);
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
      .catch((err) => {
        setFlag(false);
        toast.error(`${err}`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const arr1 = [];

  arr.map((each) => {
    if (each.data() && each.data().campId == campId) {
      arr1.push(
        createData(
          each.data().name,
          each.data().email,
          each.data().bloodGroup,
          each.data().age,
          each.data().address,
          each.data().campName,
          each.data().units,
          each.data().status,
          each.id
        )
      );
    }
  });
  function createData(
    name,
    email,
    bloodGroup,
    age,
    address,
    campName,
    units,
    status,
    _id
  ) {
    return {
      name,
      age,
      bloodGroup,
      email,
      address,
      campName,
      units,
      status,
      _id,
    };
  }

  const getProps = (props) => {
    const { name, email, age, address, units, bloodGroup, _id } = props.row;
    console.log(props);
    console.log(props);
    setName(name);
    setAddress(address);
    setAge(age);
    setBloodGroup(bloodGroup);
    setUnit(units);
    setEmail(email);
    setId(_id);
    setDisable(true);
  };
  const resetGetProps = (props) => {
    setName("");
    setAddress("");
    setAge("");
    setBloodGroup("");
    setUnit("");
    setEmail("");
    setId("");
    setDisable(false);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deleteDonorRecord = useCallback(() => {
    db.collection("donatedMembers")
      .doc(id)
      .delete()
      .then(() => {
        setDisable(false)
        toast.info("deleted Successfully", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [id]);

  const UpdateSubmit = () => {
    setFlag(true);
    let obj = {
      campId: campId,
      name: name,
      email: email,
      units: unit,
      bloodGroup: bloodGroup,
      age: age,
      address: address,
      status: status,
      campName: CampName,
    };
    db.collection("donatedMembers")
      .doc(id)
      .set(obj)
      .then(() => {
        setFlag(false);
        setUpdate(false);
        setOpenForm(false);
        toast.info("Updated Successfully", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const updateDonorRecord = useCallback(() => {
    console.log("running");
    setOpenForm(true);
    setUpdate(true);
  }, [id]);

  const handleClickOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
  };
  const handleBloodGroup = (e) => {
    setBloodGroup(e.target.value);
  };
  const handleStatusChange =(e)=>{
    setStatus(e.target.value)
  }

  const headCells = [
    { id: "1", numeric: false, disablePadding: false, label: "Donor Name" },
    { id: "2", numeric: false, disablePadding: false, label: "Age" },
    { id: "3", numeric: false, disablePadding: false, label: "Blood Group" },
    { id: "4", numeric: false, disablePadding: false, label: "Email" },
    { id: "5", numeric: false, disablePadding: false, label: "Address" },
    { id: "6", numeric: false, disablePadding: false, label: "Camp Name" },
    {
      id: "7",
      numeric: false,
      disablePadding: false,
      label: "No. of donated unit",
    },
    {
      id: "8",
      numeric: false,
      disablePadding: false,
      label: "Certificate Status",
    },
  ];
  return (
    <div className="mainCollectBlood">
      <Dialog
        open={openForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        aria-labelledby="form-dialog-title"
      >
        {update ? (
          <MuiDialogContent id="form-dialog-title">
            Update Donor
          </MuiDialogContent>
        ) : (
          <MuiDialogContent id="form-dialog-title">
            Add New Donor
          </MuiDialogContent>
        )}
        <MuiDialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Donor Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Donor Address"
            type="text"
            value={address}
            fullWidth
            onChange={handleAddress}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Select Blood Group
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={bloodGroup}
              onChange={handleBloodGroup}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter No. of units"
            value={unit}
            type="number"
            fullWidth
            onChange={handleUnit}
          />{" "}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Age"
            type="number"
            value={age}
            fullWidth
            onChange={handleAge}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Email"
            type="email"
            value={email}
            fullWidth
            onChange={handleEmail}
          />
           <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Select Blood Group
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={status}
              onChange={handleStatusChange}
            >
              <MenuItem value="Pending">
                <em>Pending</em>
              </MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </MuiDialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            Cancel
          </Button>
          {update ? (
            <Button onClick={UpdateSubmit} color="primary">
              {flag ? <CircularProgress color="secondary" /> : "Update"}
            </Button>
          ) : (
            <Button onClick={handleSubmit} color="primary">
              {flag ? <CircularProgress color="secondary" /> : "Add"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <div className="collectBloodHeader">
        <h1>{CampName}</h1>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={handleClickOpenForm}
          disabled={disable}
        >
          Add new donor
        </Button>
      </div>
      <hr />
      <DataTable
        getProps={getProps}
        rows={arr1}
        array={headCells}
        deleteDonorRecord={deleteDonorRecord}
        resetGetProps={resetGetProps}
        updateDonorRecord={updateDonorRecord}
      />
    </div>
  );
}

export default CollectBlood;
