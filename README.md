# Hello World Client-Server Application

This repository contains a simple "Hello World" application demonstrating a Node.js server serving a basic HTML client.

## Project Structure

- `server/`: Contains the Node.js server application.
  - `server.js`: The main server file using Express.js.
  - `package.json`: Node.js project dependencies and scripts.
- `client/`: Contains the static client-side files.
  - `index.html`: The main HTML file for the client.

## How to Run Locally

1.  **Install Dependencies (Server):**
    Navigate to the `server/` directory and install Node.js dependencies:
    ```bash
    cd server
    npm install
    ```
2.  **Start the Server:**
    From the `server/` directory, start the server:
    ```bash
    npm start
    ```
    The server will typically run on `http://localhost:3000` (or another port if `PORT` environment variable is set).

## Deployment on Render

This application is designed to be easily deployable on Render as a Web Service.
-   Ensure the `start` script in `server/package.json` is configured correctly (e.g., `node server.js`).
-   Render will automatically detect the Node.js environment and run the `start` script.
-   The server listens on `process.env.PORT` which Render automatically provides.
-   The client-side files are served statically by the Node.js server.
