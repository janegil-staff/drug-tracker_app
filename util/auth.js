import axios from "axios";

async function authenticate(mode, email, password) {
  let data = JSON.stringify({
    email: email,
    password: password,
    returnSecureToken: true,
  });

  let url = `http://localhost:8080/api/users/${mode}`;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const token = response.data.token;
  return token;
}

export function createUser(email, password) {
  authenticate("signup", email, password);
}

export function login(email, password) {
  authenticate("login", email, password);
}
