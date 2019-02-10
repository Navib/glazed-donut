import axios from "axios";

const signup = data => {
  return axios.post("http://localhost:5001/signup", data.payload);
};

const signin = data => {
  return axios.post("http://localhost:5001/signin", data.payload);
};

export default {
  signup: data => signup(data)
};
