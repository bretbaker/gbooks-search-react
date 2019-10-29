import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

// api key
const apiKey = process.env.REACT_APP_API_KEY;

export default {
  searchBooks: (apiUrl) => {
    let fullUrl = apiUrl + apiKey;
    return axios({
      method: 'get',
      url: fullUrl 
    })
      .then((response) => {
        // console.log(JSON.stringify(response.data.items, null, 2));
        return JSON.stringify(response.data.items, null, 2);
      })
      .catch((error) => {
          console.error(error);
      });
  }
};