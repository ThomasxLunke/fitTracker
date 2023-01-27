import axios from "axios";
import checkAuthToken from "../../../context/checkAuthToken";

async function fetchAllProgrammes() {

  axios.interceptors.request.use(function (config) {
    const token = window.localStorage.getItem("authToken")
    if (checkAuthToken())
    {
      config.headers.Authorization =  "Bearer " + token;
    }
    else {
      window.location.href = "/home-page";
    }
    
    return config;
  });
    // Requêter un utilisateur avec un ID donné.
return axios
      .get('http://localhost:1337/api/programmes')
      .then(response => {
        // Handle success.
        //console.log('Well done!');
        //console.log('Programmes : ', response.data.data);
        return response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        console.log(axios.defaults.headers.common['Authorization'])
      });
}


export default fetchAllProgrammes
