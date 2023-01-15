import axios from 'axios';

async function deleteExercice(id) {
    // Request API.
    // Add your own code here to customize or restrict how the public can register new users.
    return axios
      .delete(`http://localhost:1337/api/exercices/${id}`, {
      })
      .then(() => {
        // Handle success.
        return true
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        return false
      });
}


export default deleteExercice
