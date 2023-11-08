import axios from "axios";

async function authenticate(mode, email, password) {
  let data = JSON.stringify({
    email: email,
    password: password,
    returnSecureToken: true
  });

  let url = `http://localhost:8080/api/users/${mode}`;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
;}

export async function createUser(email, password) {
  await authenticate('signup', email, password)
}

export async function login(email, password) {
  await authenticate('login', email, password);
}