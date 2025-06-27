# 👚 WTWR (What to Wear) App

The **WTWR (What to Wear)** app is a responsive web application designed to help users choose what clothing to wear based on real-time weather conditions. It integrates live weather data and displays curated clothing recommendations for various temperature ranges — hot, warm, and cold.

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

## 🧠 Challenges Solved

This was my **first React project**, and I ran into several learning moments:

- When building the **radio buttons**, all buttons were staying selected — I realized I had missed the `onChange` handler.
- Once that was added, I then worked to implement **form validation** by disabling the "Add Garment" button until required fields were filled.
- Through trial and error, I successfully resolved both issues and gained confidence using controlled inputs and state management in React.

---

## 🚀 Future Improvements

Upon completing **Phase Two**:
- Users can add new garments to the clothing card list
- UI enhanced with animations and transitions
- Persistent storage implemented for custom clothing items
- User authentication and item saving functionality added

Remaining improvements to be completed:
- Implement responsive design to optimize the app for mobile and tablet devices

---

## 🛠️ Built With

- **React**
- **JavaScript (ES6+)**
- **CSS Modules**
- **OpenWeather API**

---

## 📸 Preview

![WTWR Page](./src/assets/README/WTWR%20Page.png)

![Clothing Item Modal](./src/assets/README/Clothing%20Item%20Modal.png)

![Add Garment Modal](./src/assets/README/Disabled%20Functionality.png)

![Add Garment Disabled State](./src/assets/README/Disabled%20State.png)

![Add Garment Disabled Functionality](./src/assets/README/Disabled%20Functionality.png)

---

## 🚀 Deployment

Check out the live app here:  
👉 [WTWR (What to Wear) Live Site](https://enyberg09.github.io/se_project_react/)

---

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
