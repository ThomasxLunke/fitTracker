import axios from 'axios';

async function addExercice(data) {
    console.log(data)
    // Request API.
    // Add your own code here to customize or restrict how the public can register new users.
    return axios
      .post('http://localhost:1337/api/exercices', {
        data : {
            nom: data.nom,
            muscleCible: data.muscleCible.toLowerCase(),
        }
        
      })
      .then(response => {
        // Handle success.
        return true
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        return false
      });
}


export default addExercice
