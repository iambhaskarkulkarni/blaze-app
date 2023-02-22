import axios from 'axios';

const API_KEY = 'AIzaSyDCYasArcOwcALFhIj2szug5aD2PgUQu1E';

async function authenticate(mode, email, password) {
  // const url = `https://ffdb-2409-40f2-3d-416c-d547-d8ca-3cf4-1a1c.in.ngrok.io/products/authenticate`;

  // const response = await axios.post(
  //   url,
  //   {
  //    username: email,
  //    password: password
  //   }
  // ).catch((exception) => console.log(exception));

  // console.log(response);

  const token = `sjjdkdllajjdjdj`;

  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}