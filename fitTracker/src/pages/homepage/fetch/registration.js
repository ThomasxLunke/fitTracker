import axios from 'axios';

async function registration(data) {
    console.log(data)
    // Request API.
    // Add your own code here to customize or restrict how the public can register new users.
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
}


export default registration
