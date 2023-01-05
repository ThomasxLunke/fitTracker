import axios from 'axios';
import jwtDecode from "jwt-decode"

async function login(data) {
    // Request API.
    console.log("LOGIN")
    return axios
    .post('http://localhost:1337/api/auth/local', {
        identifier: data.identifier,
        password: data.pass,
    })
    .then(response => {
    // Handle success.
        
        window.localStorage.setItem("authToken", response.data.jwt)
        window.localStorage.setItem("username", response.data.user.username)
        axios.defaults.headers.common['Authorization'] = "Bearer "+response.data.jwt; 
        return true
    })
    .catch(error => {
      // Handle error.
      
      return false
    });
    
}

function isLoggedIn(){
    const token = window.localStorage.getItem("authToken")
    if (token)
    {
      const {exp} = jwtDecode(token)
      if (exp * 1000 > new Date().getTime()){
        return true
      }
        
      return false
    }
    return false
  
}



export default {
    login,
    isLoggedIn
};