# co3assignment

# TapMe Telegram Web App

**Project Overview:**
TapMe is a single-page Telegram Mini Web App where users can earn coins by tapping a button, similar to the TapSwap game. The app is built using TypeScript, React.js for the frontend, Node.js with GraphQL-Yoga for the backend, and Supabase for the database. It also integrates with a Telegram bot for user interaction.

## Project Links
- **Telegram Bot**: [TapMe Telegram Bot](https://t.me/co3_assignment_bot)
- **Backend URL**: [TapMe Backend](https://co3backend.vercel.app/graphql)
- **Frontend URL**: [TapMe Frontend](https://client-pied-nine.vercel.app/)

## Features
- **Clicker Game**: Users can tap a button to earn coins. The total coin balance is displayed on the tap page with real-time updates.
- **Telegram Bot Integration**: Users interact with the game through a Telegram bot using commands like `/start`.
- **Responsive Design**: The web app is optimized for mobile screens with basic tap animations to enhance the user experience.

## Technology Stack
- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with TypeScript and GraphQL-Yoga
- **Database**: Supabase
- **Telegram Integration**: Telegram Bot API

## Project Setup

### Prerequisites
- Node.js installed on your local machine.
- Supabase account for managing the database.
- Telegram bot created using [BotFather](https://t.me/botfather).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tapme-telegram-web-app.git
   cd tapme-telegram-web-app
   ```

2. **Install dependencies for backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables for backend:**
   Create a `.env` file in the `backend` directory with the following content:
   ```bash
   BOT_TOKEN=your-telegram-bot-token
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   ```

4. **Start the backend server:**
   ```bash
   npm run start
   ```
   The backend server will be running at `http://localhost:4000/graphql`.

5. **Install dependencies for frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the frontend application:**
   ```bash
   npm start
   ```
   The frontend application will be running at `http://localhost:3000`.

### Deployment

- **Backend**: Deployed on Vercel at [TapMe Backend](https://co3backend.vercel.app/graphql).
- **Frontend**: Deployed on Vercel at [TapMe Frontend](https://client-pied-nine.vercel.app/).

### Usage

1. **Interact with the Telegram Bot:**
   - Start a chat with the [TapMe Telegram Bot](https://t.me/co3_assignment_bot).
   - Use the `/start` command to begin interacting with the game.

2. **Play the Clicker Game:**
   - Open the [TapMe Frontend](https://client-pied-nine.vercel.app/) in your browser.
   - Start tapping to earn coins! Your coin balance will be updated in real-time.

### Known Issues
- If you encounter the error "User ID is missing. Please check the URL," ensure that the Telegram bot is correctly passing the user ID as a query parameter to the frontend.
- "Failed to fetch" errors may indicate issues with the backend server or CORS configuration. Verify that the backend URL is correct and accessible.

### Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

### License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
