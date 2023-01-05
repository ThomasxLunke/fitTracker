import axios from "axios";

async function fetchAllExercices() {
    // Requêter un utilisateur avec un ID donné.
return axios
      .get('http://localhost:1337/api/exercices')
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('Exercices : ', response.data.data);
        return response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
}


export default fetchAllExercices

