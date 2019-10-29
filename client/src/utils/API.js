import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

// api key
const apiUrl = process.env.REACT_APP_API_URL;

export default {
  searchBooks: () => {
    return axios({
      method: 'get',
      url: apiUrl
    })
      .then((response) => {
        if (response) {
          return response;
        }
      })
      .catch((error) => {
        if (error) {
          return error;
        }
      });
  }
};