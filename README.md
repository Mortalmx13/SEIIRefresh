# Getting Started

Follow these steps to set up the project locally:

## 1. Download the Project from GitLab

Clone or download the project from GitLab to your local machine.

## 2. Open in Visual Studio Code (VSCode)

Open the downloaded project folder in Visual Studio Code for development.

## 3. Install Node.js and Vite

Ensure you have Node.js and Vite installed on your system. If not, you can download and install them from their official websites:
- Node.js: [Download Node.js](https://nodejs.org/)
- Vite: Install Vite globally using npm: npm install -g create-vite



## 4. Create a Local ".env.local" File

Create a `.env.local` file in the root directory of the project and add the following environment variables:

VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_PROJECT_ID='65c67cc691a1c4e4e7fc'
VITE_APPWRITE_STORAGE_ID='65cec9db13d42f32edc3'
VITE_APPWRITE_DATABASE_ID='65ceca34aa70ac48deb2'
VITE_APPWRITE_SAVES_COLLECTION_ID='65cecae9ecbe8828cdfd'
VITE_APPWRITE_POST_COLLECTION_ID='65ceca9691bed50b51ac'
VITE_APPWRITE_USER_COLLECTION_ID='65cecac4c56db715ace1'
VITE_APPWRITE_FOLLOWS_COLLECTION_ID='660dfed54bf641c5241e'


Make sure to replace the values with your actual Appwrite configuration.

## 5. Run the Project

Open the terminal in VSCode and type the following command to start the development server:

npm run dev



This command will build the project and start the development server. You can access the project at the provided URL (usually `http://localhost:5173`).

## Termination

To stop the development server, press `Ctrl + C` in the terminal.
