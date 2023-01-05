import axios from "axios";

async function fetchAllProgrammes() {
    // Requêter un utilisateur avec un ID donné.
return axios
      .get('http://localhost:1337/api/programmes')
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('Programmes : ', response.data.data);
        return response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        console.log(axios.defaults.headers.common['Authorization'])
      });
}


export default fetchAllProgrammes
