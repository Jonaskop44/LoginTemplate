import axios from "axios";
import Cookies from "js-cookie";
import { Auth } from "./auth";
import { Session } from "./session";

export default class ApiClient {
  auth: Auth;
  session: Session;
  constructor() {
    this.auth = new Auth();
    this.session = new Session();

    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
      "accessToken"
    )}`;
    axios.defaults.baseURL = "http://localhost:3001/api/v1/";
  }
}
