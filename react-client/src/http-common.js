import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-108-184-21.ap-south-1.compute.amazonaws.com:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
