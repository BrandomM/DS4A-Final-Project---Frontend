import axios from "axios";
//https://thingproxy.freeboard.io/fetch/
const URL = "http://ec2-54-243-194-107.compute-1.amazonaws.com/";

export function get(path) {
  return axios.get(URL + path);
}
