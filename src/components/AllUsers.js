import { Table, TableHead, TableRow ,TableCell, TableBody,makeStyles} from '@material-ui/core';
// Data is renders unders the tablebody
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../Service/api';
// useEffectMounted our data oR renders our data


const useStyle = makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
        // top right bottm left
    },
    thead:{
        // '& > *'we are using these to apply multiples
        '& > *':{
            background:'#000000',
            color:'#ffffff',
            fontSize:20
        }
    },
    row:{
        '&>*':{
               fontSize:20
        }
    }
})

function AllUsers() {

    const [users,setUsers]=useState([]);
    const classes = useStyle();

// we take the [] empty array it takes user is empty
// user is initial value we cannot change it directly
// but with the help of setUser we can change the value its a function
// user is a variable 



    useEffect(()=>{
         getAllUsers();
    },[])

    const getAllUsers= async()=>{
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
    // using only response it give overall iformation about api
    // but if you are using response.data it will gives us a data in array form
    // our real data is on to data thats why to access it we are writting the response.data
   const deleteUser=async(id)=>{
    //    console.warn(id)
    let result = await fetch(`http://localhost:3003/users/${id}`,{
        method:"Delete"

    });
    result = await result.json()
    if(result){
        getAllUsers();
        console.log('record deleted') 
    }
   }

   const updateProduct = async()=>{
      console.warn(users)
   }


   const arr = ["id", "name","birtdate", "address","gender","hobbies","college","Delete","update",];
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    {/* <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>update</TableCell> */}
                    {/* instead of these hard coded we can a itss soft coded by map below functionality */}
                    {arr.map((c)=>{
                       return <TableCell>{c}</TableCell>
                   })}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                 users.map(user=>{
                     return (
                     <TableRow className={classes.row}>
                     <TableCell>{user.id}</TableCell>
                     <TableCell>{user.name}</TableCell>
                     <TableCell>{user.birtdate}</TableCell>
                     <TableCell>{user.address}</TableCell>
                     {/* <TableCell>{user.gender}</TableCell> */}
                     <TableCell align="left">{!user.male ? 'female' : 'male'}</TableCell>
                     <TableCell>{user.hobbies}</TableCell>
                     <TableCell>{user.college}</TableCell>
                     

                     <TableCell>{<button onClick={()=>deleteUser(user.id)}>Delete</button>}</TableCell>
                     <TableCell>{<Link to={"/update/"+user.id}>Update</Link>}</TableCell>
                     
                 </TableRow>
                     )
                 })
                }
            </TableBody>
        </Table>
    );
}

export default AllUsers;

