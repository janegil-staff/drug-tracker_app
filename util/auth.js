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

export async function createUser(email, password) {
  const token = await authenticate("signup", email, password);
  return token;
}

export async function login(email, password) {
  const token = await authenticate("login", email, password);
  return token;
}
