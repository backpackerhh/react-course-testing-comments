import axios from "axios";

const FAKE_JSON_SERVER_BASE_URL =
  "http://my-json-server.typicode.com/backpackerhh/react-course-testing-comments";

export default axios.create({
  baseURL: FAKE_JSON_SERVER_BASE_URL
});
