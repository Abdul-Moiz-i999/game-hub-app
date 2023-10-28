import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d93cdc9b0f84b6ea89c0af002ed048c",
  },
});

export { CanceledError };
