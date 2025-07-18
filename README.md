# 👚 WTWR: Weather-Based Wardrobe App (React + Express)

The **WTWR (What to Wear)** app is a is a full-stack weather-based wardrobe app built with **React**, allowing users to view, add, and manage clothing items based on real-time weather data. It features user authentication, profile management, and CRUD functionality for wardrobe items, integrated with weather data from the OpenWeather API.

---

## 🌤️ Project Overview

This React-based app fetches weather data from the **OpenWeather API** and:

- Displays current temperature and location
- Filters and shows clothing cards based on the temperature
- Allows users to preview clothing items and add new ones via modals

---

## ✨ Key Features

### 🔁 Weather Integration

- Live OpenWeather API integration
- Dynamic temperature display (°F and °C)
- Auto location-based weather filtering

### 👕 Clothing Card System

- Displays clothing items from data
- Filters clothing by temperature range
- Clickable cards to preview more details

### 🧩 Modal Functionality

- Modal for **previewing** an item
- Modal for **adding** a new garment
- Smooth modal open/close logic

### 🎨 User Interface

- Mobile-first responsive design
- Validated form inputs for better UX
- Disabled button states for incomplete forms

---

## ⚙️ Technical Implementation

- Created modular, reusable components
- Used **props** to lift and pass data between child and parent components
- Implemented **controlled components** for form inputs and radio buttons
- Managed modal states and weather logic via React `useState` and `useEffect`

---

## 🔐 Authentication & Backend

This app connects to the **Project 13 Express backend** (`se_project_express`) which handles:

- JWT-based user authentication (signup, login, logout)
- MongoDB for storing user profiles and clothing items
- RESTful API routes for protected data access

### 🔐 API Endpoints Implemented

- **Auth**: `POST /signup`, `POST /signin`
- **User**: `GET /users/me`, `PATCH /users/me`
- **Items**: `GET /items`, `POST /items`, `DELETE /items/:itemId`
- **Likes**: `PUT /items/:itemId/likes`, `DELETE /items/:itemId/likes`

---

### 🔐 Protected Routing

- Utilized **React Router** for page navigation
- Certain routes are protected using JWT token validation
- Used React Router to navigate between pages, and kept some pages secure using user login tokens

---

## 🧠 Challenges Solved

- When calling the `addItem()` API, the resolved value (`newItem`) returned the entire response object, not just the item data.
- Initially, using `setClothingItems(prev => [newItem, ...prev])` added the whole response object—including the `data` wrapper—into the items array, which caused rendering issues.
- The solution was to use `newItem.data` to extract the actual clothing item object. This ensured the new item matched the shape of existing items in state, allowing React to render it properly.

---

## 🚀 Future Improvements

Upon completing **Phase Three**:
Remaining improvements to be completed:

- Implement responsive design to optimize the app for mobile and tablet devices

---

## 🛠️ Built With

- **React**
- **JavaScript (ES6+)**
- **CSS Modules**
- **OpenWeather API**
- Used **React Context API** to manage current user and temperature unit state globally

---

### 👚 Clothing Item Management

- Add new clothing items with images and weather tags
- View all available items
- Delete your own items
- Like/unlike items from all users

---

## 📸 Preview

![WTWR Page](./src/assets/README/WTWR%20Page.png)

![Clothing Item Modal](./src/assets/README/Clothing%20Item%20Modal.png)

![Add Garment Modal](./src/assets/README/Disabled%20Functionality.png)

![Add Garment Disabled State](./src/assets/README/Disabled%20State.png)

![Add Garment Disabled Functionality](./src/assets/README/Disabled%20Functionality.png)

---

## ⚙️ How to Run Locally

1. Clone this repo and the backend repo (`se_project_express`).
2. Install dependencies with `npm install`.
3. Start backend server (`npm start` in backend folder).
4. Start frontend with `npm run dev` (uses Vite).
5. Open the app in your browser at `http://localhost:3000`.

---

## 🚀 Deployment

Check out the live app here:  
👉 Frontend: [WTWR (What to Wear) Live Site](https://enyberg09.github.io/se_project_react/)
Backend: (Runs locally at `http://localhost:3001` or deployed backend link if applicable)

---

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
