# Cricket API Dashboard

This project is a simple web application built with Express.js to display cricket match information using the CricAPI. It provides features such as viewing current matches, scoreboard, series information, and details about teams and players.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hzaheer48/cricket-api-dashboard.git


2. **Navigate to the project directory:**

   ```bash
   cd cricket-api-dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

Ensure that you have a valid API key from [CricAPI](https://www.cricapi.com/) and update the `API_KEY` variable in `app.js` with your key.

```javascript
const API_KEY = 'your-api-key';
```

## Usage

Start the server:

```bash
node index.js
```

Visit [http://localhost:8080](http://localhost:8080) in your browser to access the cricket dashboard.

## Features

- View current matches
- Check scoreboard for ongoing matches
- Explore cricket series information
- Display details about teams and players
- Search for players by name

## Screenshots
![Alt text](/screenshots/screenshot_1.png?raw=true "Optional Title")
![Alt text](/screenshots/screenshot_2.png?raw=true "Optional Title")
![Alt text](/screenshots/screenshot_3.png?raw=true "Optional Title")
![Alt text](/screenshots/screenshot_4.png?raw=true "Optional Title")
![Alt text](/screenshots/screenshot_5.png?raw=true "Optional Title")

## Contributions
Feel free to contribute to this project by opening issues or creating pull requests.
