# AI Chatbot Project

This project sets up a Gemini AI Chatbot using React and Google Generative AI. Follow the instructions below to set up and run the project on your local machine.

## Prerequisites

Ensure you have the following installed on your system:
- Node.js

## Installation Guide

### Install Node.js

If you do not have Node.js installed, follow these steps:

1. Visit the [official Node.js website](https://nodejs.org/en/download/).
2. Download the Node.js installer for your operating system.
3. Run the installer and follow the prompts to complete the installation.

### Set Up and Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Anubhx/AI-chatbot
   ```

2. **Open the Project in VS Code**
   - Open Visual Studio Code.
   - Open the project folder in VS Code.

3. **Open Integrated Terminal in VS Code**
   - Right-click on the sidebar in VS Code.
   - Select "Open In Integrated Terminal".

4. **Install Dependencies**
   ```bash
   npm install
   ```
   Wait for the installation to complete. You will see a `node_modules` folder appear in the sidebar.

5. **Set Up API Key**
   - Create your API key from [Google Generative AI](https://ai.google.dev/).
   - Open the `gemini.js` file located in the `src/config` folder.
   - Paste your API key in the appropriate location within the `gemini.js` file.

6. **Run the Project**
   ```bash
   npm run dev
   ```

7. **Access the Project in Your Browser**
   - Copy the localhost link provided in the terminal after running the previous command.
   - Open the link in your web browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.