import axios from "axios";
import Constants from "../utils/constants";

export default class Service {
  static getAll = async (page: number) => {
    let result = { data: null, error: null };
    await axios
      .get(Constants.GET_ALL + page)
      .then((resp) => {
        if (resp.status === 200) {
          result.data = resp.data;
        }
      })
      .catch((err) => {
        result.error = err.response.data;
      });

    return result;
  };
  static search = async (keyword: string) => {
    let result = { data: null, error: null };
    await axios
      .get(Constants.SEARCH + keyword)
      .then((resp) => {
        if (resp.status === 200) {
          result.data = resp.data;
        }
      })
      .catch((err) => {
        result.error = err.response.data;
      });

    return result;
  };
}
