# AI Photo Generator

This is a simple web application that generates images based on user-provided prompts using OpenAI's DALL·E 3 model. Users can input a prompt, and the application sends the request to an OpenAI API to generate and display the resulting image.

Credits: This project is based on a Firebase course and is not my intellectual property. It is intended for educational purposes only.

## Features

- **Prompt-based Image Generation:** Users can input a text prompt, and the app generates an image based on that prompt using OpenAI's image generation model.
- **Spinner Animation:** A spinner animation is shown while the image is being generated.
- **Secure API Key Handling:** The OpenAI API key is securely stored in a `.env` file and accessed server-side to maintain privacy.

## Technologies Used

- **HTML, CSS, JavaScript:** For building the frontend of the application.
- **Node.js and Express:** For handling the backend server and API requests.
- **OpenAI API:** To generate images based on user input prompts using DALL·E 3.
- **CORS:** To handle cross-origin requests between the frontend and backend.
- **dotenv:** To manage environment variables, including the OpenAI API key.

## How to Run Locally

### 1. Clone the repository 
  ```bash 
  git clone https://github.com/wimthomzik/imageGenerator.git
  cd imageGenerator
  ``` 
### 2. Install dependencies 
  ```bash 
  npm install
  ``` 
### 3. Create `.env` file
Create a `.env` file in the root of your project directory and add your OpenAI API key:
  ```.env 
  OPENAI=your-openai-api-key
  ```
### 4. Start the server 
  ```bash 
  npm start
  ```
This will make the app available at `http://localhost:3000`.

## How It Works

  1. Users enter a text prompt into the form and click Generate.
  2. The prompt is sent to the backend API, where it is processed by OpenAI's DALL·E model.
  3. The generated image is returned by the API and displayed on the page.
  4. A spinner is shown while the image is being generated to improve user experience.

### Note:

The API key used for this project is stored in a .env file for security reasons. Please make sure not to share your .env file or expose the API key publicly.
This project requires an OpenAI API key. You can get your own key from the OpenAI platform.

## Future Improvements

- **Prompt History:** Save and display previous prompts to allow users to regenerate images from past searches.
- **Better Error Handling:** Improve error messages and handling for different kinds of issues (e.g., network errors or invalid prompts).

