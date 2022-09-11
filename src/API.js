import axios from "axios";

export default class API {
  constructor(url = process.env.REACT_APP_API_URL) {
    this.instance = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getInstance() {
    return this.instance;
  }
}
