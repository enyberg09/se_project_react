const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem({ name, weatherType, link }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem, createUser };
