# 🛒 Online Store API

A robust and scalable RESTful API for an online store application, built using **Node.js** and **Express.js**, with **MongoDB** as the database managed via **Mongoose**. The project strictly adheres to the **MVC (Model-View-Controller)** design pattern to ensure clean, maintainable, and modular code architecture.

---

## 🌟 Key Features

- **Product & Category Management:** Complete CRUD operations to manage, categorize, and retrieve products.
- **Shopping Cart System:** Fully functional cart logic allowing users to add products, update quantities, and manage their shopping sessions.
- **Data Association (Mongoose Population):** Utilizing Mongoose population to dynamically reference and fetch detailed product data within the cart schema.
- **Clean Architecture (MVC):** Strict separation of concerns divided into:
  - **Models:** Database schemas and business rules.
  - **Controllers:** Core application and request-handling logic.
  - **Routes:** API endpoint mappings and routing.
  - **Config:** Database connection setups.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **API Testing:** Postman
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```text
my-store-api/
├── config/             # Database connection configuration
├── controllers/        # Request controllers (business logic)
├── models/             # Mongoose schemas and database models
├── routes/             # Express API route definitions
├── .gitignore          # Ignored files and folders (e.g., node_modules)
├── package.json        # Project metadata and dependencies
├── server.js           # Entry point of the application
└── README.md           # Project documentation and guide