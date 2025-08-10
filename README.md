# Hello World Client-Server Application

This is a simple "Hello World" application demonstrating a basic client-server architecture.

## Architecture Overview

*   **Frontend (Client):** A simple HTML page (`public/index.html`) that uses JavaScript to fetch the "Hello World!" message from the backend.
*   **Backend (Server):** A Node.js Express application (`server.js`) that serves static frontend files and exposes a `/hello` API endpoint to deliver the "Hello World!" message.

## Technology Stack

*   **Frontend:** HTML, CSS, JavaScript
*   **Backend:** Node.js, Express.js

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/malachico/hello-world-client-server.git
    cd hello-world-client-server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    npm start
    ```
4.  **Access the application:**
    Open your web browser and navigate to `http://localhost:3000`.

You should see "Hello World!" displayed in your browser.

## API Endpoints

*   `GET /hello`: Returns the "Hello World!" string.
