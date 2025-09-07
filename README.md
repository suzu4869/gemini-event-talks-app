# Tech Talk Day - Event Schedule App

A simple single-page application that displays the schedule for a one-day technical talk event.

## Overview

This project is a demonstration of a simple web application built with vanilla Node.js for the backend and vanilla JavaScript for the frontend. It serves a webpage that fetches a list of talks from a server API and dynamically renders the event schedule.

## Features

-   **Simple Backend:** Built with the standard `http` module in Node.js, without any external frameworks like Express.
-   **Vanilla Frontend:** The client-side is written in plain JavaScript, HTML, and CSS, with no frameworks or libraries.
-   **Dynamic Schedule:** Fetches talk data from a local API and renders the schedule on the fly.
-   **Live Search:** Filter the schedule in real-time by typing a category into the search bar.

## Project Structure

```
.
├── public/
│   ├── index.html      # The main HTML file
│   ├── style.css       # Styles for the application
│   └── script.js       # Client-side JavaScript logic
├── .gitignore
├── package.json
├── README.md           # You are here!
└── server.js           # The Node.js server
```

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Running the App

1.  **Clone the repository (or download the files).**

2.  **Install dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```
    *(Note: This project has no external dependencies, but this is good practice.)*

3.  **Start the server:**
    ```bash
    node server.js
    ```

4.  **View the application:**
    Open your web browser and navigate to:
    [http://localhost:3000](http://localhost:3000)

You should now see the "Tech Talk Day" event schedule. Try out the search bar to filter talks by category!
