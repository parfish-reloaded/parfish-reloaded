export const USERS_API_URL =
  process.env.REACT_APP_USERS_API ||
  'https://my-json-server.typicode.com/parfish-reloaded/parfish-reloaded/users';

export async function getUsers() {
  const response = await fetch(`${USERS_API_URL}`);
  const users = await response.json();
  return users;
}
