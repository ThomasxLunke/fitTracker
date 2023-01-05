import axios from 'axios';

async function login(data) {
    // Request API.
    console.log("LOGIN")
    axios
    .post('http://localhost:1337/api/auth/local', {
        identifier: data.identifier,
        password: data.pass,
    })
    .then(response => {
    // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        window.localStorage.setItem("authToken", response.data.jwt)
        window.localStorage.setItem("username", response.data.user.username)
        
        axios.defaults.headers.common['Authorization'] = "Bearer "+response.data.jwt;

        console.log(axios.defaults.headers.common['Authorization'])
    })
    .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    });
}


export default login