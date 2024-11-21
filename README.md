# Web Design and UX

## Overview
Welcome to the **Web Design and UX** repository! This comprehensive collection showcases a variety of frontend and backend projects focusing on modern web development practices, user experience design, and functional web applications. The repository combines visually appealing designs, dynamic user interactions, and robust server-side functionality, making it a valuable resource for learning and implementing full-stack development.

---

## Features

### **Frontend Highlights**
1. **Lamborghini Website**:
   - **Home**: Showcases Lamborghini’s history and luxurious branding.
   - **Jobs**: Lists open job positions with detailed descriptions.
   - **Contact**: Displays global dealership locations in a visually engaging card layout.
   - **Login**: User login with validation and form handling.

2. **Weather Forecast Application**:
   - **City Search**: Enter city names to get 5-day weather forecasts.
   - **Daily and Hourly Data**: Provides detailed weather summaries and hourly updates.
   - **API Integration**: Uses OpenWeather API for real-time data.

3. **Responsive Design**:
   - Implemented using **Bootstrap**, **Material-UI**, and custom CSS for mobile-first design.

4. **Dynamic Routing**:
   - Managed with **React Router** for seamless page transitions.

### **Backend Highlights**
1. **User Management APIs**:
   - Create, read, update, and delete user records with secure password handling.
   - Implements **JWT-based authentication** for session management.
   - APIs built with **Express.js** and connected to a **MongoDB** database.

2. **Weather API Integration**:
   - Fetches and processes data from the OpenWeather API.
   - Backend handles data validation and formatting for frontend consumption.

3. **Code Optimization**:
   - Organized routes and reusable components for scalability.

---

## Technologies Used

### **Frontend**
- **React.js**: Component-based framework for dynamic user interfaces.
- **Bootstrap**: Responsive layout and styling.
- **Material-UI**: Modern and accessible UI elements.
- **Moment.js**: For date and time formatting.
- **CSS & SCSS**: For custom styling and modularity.

### **Backend**
- **Node.js**: Runtime environment for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for schema management.
- **JWT**: Secure token-based authentication.
- **Bcrypt**: Password encryption.

---

## File Structure

### **Frontend Directory**
- **Core Components**:
  - `App.js`: Main entry point managing routes and layout.
  - `WeatherContainer.js`: Handles weather data fetching and display.
  - `Hourly.js` & `HourlyCityForecast.js`: Displays hourly weather details.
  - `Home.js`, `Jobs.js`, `Contact.js`, `Login.js`: Pages for Lamborghini's site.

- **Styling**:
  - `App.css`, `index.css`: Application-wide styles.
  - `WeatherContainer.css`: Weather app-specific styles.

### **Backend Directory**
- **APIs**:
  - `route.js`: Defines routes for user management and data handling.
- **Server Configuration**:
  - `server.js`: Configures and starts the Node.js server.
- **Models**:
  - `sample.js`: Schema definition for MongoDB collections.

---

## How to Run

### **Frontend**
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### **Backend**
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
4. Ensure MongoDB is running locally or via a cloud provider.

---

## API Endpoints

### **User Management**
1. `GET /user/getAll`: Fetch all users.
2. `POST /user/create`: Add a new user with email and password validation.
3. `PUT /user/edit/:username`: Update user information.
4. `DELETE /user/delete/:email`: Remove a user.

### **Weather Data**
1. Fetches 5-day weather forecasts for specified cities.
2. Provides hourly forecasts for selected days.

---

## Highlights

1. **Full-Stack Implementation**:
   - Integrated frontend and backend for seamless user experience.

2. **Modern Web Practices**:
   - API-driven architecture.
   - Responsive design using CSS frameworks.

3. **Security**:
   - Password encryption with bcrypt.
   - Token-based authentication with JWT.

4. **Scalability**:
   - Modular code structure.
   - Reusable components for UI and backend logic.

---

## Future Enhancements
1. Add user dashboards for saving weather preferences.
2. Implement a Lamborghini car model configurator.
3. Deploy the application on a cloud platform like AWS or Heroku.
4. Introduce notifications for weather alerts.

---

## Credits
This repository was created by **Shreyas Dasari**. It demonstrates modern web design and UX principles alongside full-stack development practices.

Explore the code and contribute to this evolving repository!