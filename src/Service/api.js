// whatever the apis we have its stored in these file
// async await returns the promise replacement of .then in js
import axios from 'axios';

const url = "http://localhost:3003/users";

const urln ="http://universities.hipolabs.com/search?name=middle";


export const getUsers=async()=>{
    return await axios.get(url);
}

// const urln ="https://reqres.in/api/users";
export const addUser=async(user)=>{
    await axios.post(url,user)
    // we are using user to which user data to store in db

}


export const addCollege=async(user)=>{
    await axios.post(urln,user)
    // we are using user to which user data to store in db

}


// import axios from 'axios';

// const usersUrl = 'http://localhost:8000/users';


// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }