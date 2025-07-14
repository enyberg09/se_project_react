export const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

function getItems(token) {
  return fetch(`${baseUrl}/items`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function addItem({ name, weatherType, link }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, weatherType, link }),
  }).then(checkResponse);
}

function createUser({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
}

function loginUser({ email, password }) {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem, createUser, loginUser };
