import axios from "axios";

async function fetchAllSeances() {
    // Requêter un utilisateur avec un ID donné.
return axios
      .get('http://localhost:1337/api/seances')
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('Seances : ', response.data.data);
        return response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
}


export default fetchAllSeances
