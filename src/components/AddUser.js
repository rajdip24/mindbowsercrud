import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import React, { useEffect, useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Field } from "formik";

// To get the data from the db.json we shoud have to use there API which is get localhost3000/user
// axios with the help of it we can hit the API like fetch
// useEffect equivalent to componentDidMount
// Component 1st time renders that time we are using the useEffect  

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&>*": {
      marginTop: 20,
    },
  },
});

// object initialvalues

const initialValues = {
  name: "",
  address:"",
  hobbies:"",
  birtdate:"",
  female:false,
  male:false,
  college:""

};


function AddUser() {
  const classes = useStyle();
  const [user, setUser] = useState(initialValues);
  

  
  // we need these name,username,email,phone properties thats why we destructure it
  const { name, address,hobbies,birtdate,male,female,college } = user;
  const navigate = useNavigate();
  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };


  // const url = "http://localhost:3003/users";
//   export const addUser=async(user)=>{
//     await axios.post(url,user)
//     // we are using user to which user data to store in db

// }

// useEffect(()=>{
//   fetch('http://universities.hipolabs.com/search?name=middle')
//   .then((result)=>{
//       result.json()
//       .then((resp)=>{
//       //    console.warn(resp)
//           setCollege(resp)
//       })
//   })

// },[])
// console.warn(college);

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };
  // Name, Birth date, address, gender, college, Hobbies
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        {/* value uchla sathi onchange use kara lagte */}
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>

      <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthday"
        name="birtdate"
        onChange={(e) => onValueChange(e)}
        value={birtdate}
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Stack>

      {/* <FormControl>
        <InputLabel>Birth date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
        />
      </FormControl> */}
      <FormControl>
        <InputLabel>address</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="address" value={address} />
      </FormControl>
      {/* <FormControl>
        <InputLabel>gender</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
      </FormControl>
      <FormControl>
        <InputLabel>college</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
      </FormControl> */}
{/* 
          <Grid item xs={6}>
            <Field type="checkbox" style={{ width: 40, height: 20 }} name="is_default" />
            Default &nbsp;
            <Field type="checkbox" style={{ width: 40, height: 20 }} name="is_admin" />
            Admin &nbsp;
          </Grid> */}
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="gender"
      >
        <FormControlLabel onChange={(e) => onValueChange(e)} value="female" name="female" control={<Radio />} label="Female" />
        <FormControlLabel onChange={(e) => onValueChange(e)} value="male" name="male" control={<Radio />} label="Male" />

      </RadioGroup>
    </FormControl>


    <h2>Hobbies--</h2>
    <FormControlLabel
              control={
          <Checkbox
        name="hobbies"
        value={hobbies}
        onChange={(e) => onValueChange(e)}
              />
             }
           label="Reading"/>
        
        <FormControlLabel
              control={
          <Checkbox
        name="hobbies"
        value={hobbies}
        onChange={(e) => onValueChange(e)}
              />
             }
           label="Gaming"/>
        
        <FormControlLabel
              control={
          <Checkbox
        name="SomeName"
        value="SomeValue"
              />
             }
           label="Travelling"/>
        
        <FormControlLabel
              control={
          <Checkbox
        name="SomeName"
        value="SomeValue"
              />
             }
           label="Drawing"/>
        <br/>
      <FormControl>



        <InputLabel>Hobbies</InputLabel>
        
        
        <Input onChange={(e) => onValueChange(e)} name="hobbies" value={hobbies} />
      </FormControl>
     

<InputLabel id="demo-controlled-open-select-label">College</InputLabel>
<Select
  labelId="demo-controlled-open-select-label"
  id="demo-controlled-open-select"
  // open={open}
  // onClose={handleClose}
  // onOpen={handleOpen}
  value={college}
  label="college"
  name="college"
  onChange={(e) => onValueChange(e)}
>

  <MenuItem value="Middlesbrough College">Middlesbrough College</MenuItem>
  <MenuItem value="Middlesex Community College">Middlesex Community College</MenuItem>
  <MenuItem value="Middlesex County College">Middlesex County College</MenuItem>
  <MenuItem value="Middlebury College">Middlebury College</MenuItem>
  <MenuItem value="Middle East University">Middle East University</MenuItem>
  <MenuItem value="Middle East Technical University">Middle East Technical University</MenuItem>
  <MenuItem value="Middle Tennessee State University">Middle Tennessee State University</MenuItem>
  <MenuItem value="American University of Middle East">American University of Middle East</MenuItem>
</Select>
  



        
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUserDetails()}
      >
      Add User
      </Button>
    </FormGroup>
  );
}

export default AddUser;






