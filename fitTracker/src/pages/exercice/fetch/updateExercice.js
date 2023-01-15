import axios from 'axios';

async function updateExercice(id,nom) {
    console.log(id, nom)
    // Request API.
    // Add your own code here to customize or restrict how the public can register new users.
    return axios
      .put(`http://localhost:1337/api/exercices/${id}`, {
    data : {
        nom: nom
    }
    })
      .then(() => {
        // Handle success.
        console.log('yiiiiiiiii')
        return true
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        return false
      });
}


export default updateExercice
