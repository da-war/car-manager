<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>






```md
# 🚗 NestJS Cars API

This project is a **NestJS** backend application that provides a complete **CRUD (Create, Read, Update, Delete)** API for managing cars. It's built using modern best practices with NestJS, TypeScript, and MongoDB as the database. The API allows users to perform operations like adding new cars, retrieving a list of cars, updating car details, and deleting cars.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

- 📦 **Create** new cars with detailed information (model, manufacturer, year, etc.)
- 📝 **Read** car details and retrieve a list of all cars
- 🔄 **Update** existing car information
- ❌ **Delete** cars from the database
- 🔍 **Filter and Search** cars by various parameters like manufacturer and model
- 🗄 **MongoDB Integration** for data persistence
- 🛠 **TypeScript** for static typing and better developer experience
- 🚀 **Modular Architecture** following NestJS best practices

---

## Tech Stack

- **Backend**: [NestJS](https://nestjs.com/), [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/nestjs-cars-api.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nestjs-cars-api
   ```

3. **Install dependencies:**

   Using Yarn:

   ```bash
   yarn install
   ```

   Or using npm:

   ```bash
   npm install
   ```

4. **Set up the environment variables:**

   Create a `.env` file at the root of your project and add the necessary environment variables (see [Environment Variables](#environment-variables)).

5. **Start the MongoDB server** (if you're running MongoDB locally):

   ```bash
   mongod
   ```

---

## Running the App

To run the application, use the following commands:

### Development

```bash
npm run start:dev
```

or

```bash
yarn start:dev
```

The API will now be running at `http://localhost:3000`.

### Production

To run the app in production mode:

```bash
npm run start
```

or

```bash
yarn start
```

---

## API Endpoints

Here are the available API endpoints for managing cars:

### Cars

| Method | Endpoint           | Description             | Example Body |
| ------ | ------------------ | ----------------------- | ------------ |
| `POST` | `/cars`             | Add a new car           | `{ "make": "Toyota", "model": "Corolla", "year": 2021 }` |
| `GET`  | `/cars`             | Get a list of all cars  | N/A          |
| `GET`  | `/cars/:id`         | Get car details by ID    | N/A          |
| `PATCH`| `/cars/:id`         | Update car by ID         | `{ "year": 2022 }` |
| `DELETE` | `/cars/:id`       | Delete car by ID         | N/A          |

---

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/carsdb
PORT=3000
```

- `MONGODB_URI`: The URI of your MongoDB instance.
- `PORT`: The port the application will run on (default: 3000).

---

## Project Structure

```bash
src/
│
├── cars/
│   ├── cars.controller.ts      # Cars Controller
│   ├── cars.service.ts         # Cars Service
│   ├── cars.module.ts          # Cars Module
│   └── schemas/car.schema.ts   # Car Schema for MongoDB
│
├── app.module.ts               # App-level module
└── main.ts                     # App entry point
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to submit issues and pull requests for new features or bug fixes. All contributions are welcome!

---

## Contact

For any questions or suggestions, please reach out to me:

- **Email**: ranadawarabdullah@gmail.com
- **GitHub**: [da-war](https://github.com/da-war)
```

### Key Features of This README:
1. **Introduction**: Clear description of the project, purpose, and features.
2. **Tech Stack**: Details of the technologies used in the backend.
3. **Installation**: Step-by-step guide on how to install and run the project.
4. **API Endpoints**: A table detailing the available endpoints and methods for CRUD operations.
5. **Environment Variables**: Easy setup for configuring MongoDB and server port.
6. **License**: MIT license to allow others to contribute and use the code freely.

