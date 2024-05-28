import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth"
const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj)
const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { usernameOrEmail, password });

export { registerAPICall, loginAPICall }