import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

// api key
const apiKey = process.env.API_KEY;

export default {
  getBooks: () => {
    return axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=' + apiKey
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