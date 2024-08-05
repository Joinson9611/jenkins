import axios from 'axios';

axios.interceptors.request.use(
  config => {
    console.log(config);
  },
  err => {
    console.log(err);
  }
);

axios.interceptors.response.use(
    res => {
        console.log(res);
    },
    err => {
        console.log(err);
    }
);
