import axios from "axios";

export default class API {
  constructor(url = process.env.REACT_APP_API_URL, withAuth = false) {
    this.instance = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }

  getInstance() {
    return this.instance;
  }
}
