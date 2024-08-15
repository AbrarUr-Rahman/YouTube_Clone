# YouTube Clone

A YouTube-like video streaming application built with React, utilizing the YouTube Data API for fetching video content. The app allows users to browse popular videos by category, view detailed video pages, and more.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [API Configuration](#api-configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse popular videos by category
- Responsive design for mobile and desktop
- Video detail page with related videos and comments
- Search for videos by keyword
- Light and dark mode support

## Demo

Check out the live demo of the project [here](https://your-demo-link.com).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
2. **Install dependencies:**
   ```bash
   npm install
4. **Start the development server:**
   ```bash
   npm start
## API Configuration

To fetch data from the YouTube API, you need to set up your API keys:

1. **Get API Key:**

   - Go to the [Google Developer Console](https://console.developers.google.com/).
   - Create a new project and enable the YouTube Data API v3.
   - Generate an API key.

2. **Switch API Keys on Quota Exceeded:**

   You can manage your API keys in the `data.js` file. If your quota is exceeded for one key, the app can automatically switch to another:

   ```javascript
   export const API_KEYS = [
     'YOUR_FIRST_API_KEY',
     'YOUR_SECOND_API_KEY',
     // Add more keys as needed
   ];

   export let API_KEY_INDEX = 0;

   export const getAPIKey = () => {
     return API_KEYS[API_KEY_INDEX];
   };

   export const switchAPIKey = () => {
     API_KEY_INDEX = (API_KEY_INDEX + 1) % API_KEYS.length;
   };

## Usage

- **Browse Videos:** Navigate through different categories using the sidebar to discover trending videos in each category.
- **Search Videos:** Use the search bar at the top to find videos by specific keywords.
- **View Video Details:** Click on any video thumbnail to view the video in detail, along with statistics such as views, likes, and comments, as well as related videos.
- **Responsive Design:** The application is fully responsive and works well on both desktop and mobile devices.

## Dependencies

This project utilizes the following dependencies:

- **React:** A JavaScript library for building user interfaces.
- **React Router DOM:** A collection of navigational components for React, allowing you to create dynamic and single-page applications.
- **Moment.js:** A library for parsing, validating, manipulating, and displaying dates and times in JavaScript.
- **Prop-Types:** A library for type-checking props in React components.
- **Fetch API:** A modern interface for making network requests in JavaScript.

To install these dependencies, run the following command in your project directory:

```bash 
npm install react react-router-dom moment prop-types
```

## Technologies Used

- **React:** The primary JavaScript library used for building the user interface and components.
- **JavaScript (ES6+):** The programming language used throughout the project, leveraging modern ES6+ features like arrow functions, async/await, and destructuring.
- **CSS:** Used for styling the components, creating responsive layouts, and ensuring a polished user interface.
- **YouTube Data API v3:** Integrated to fetch video data, including trending videos, search results, and video details.
- **Google Developer Console:** Utilized to manage API keys and configure project settings related to the YouTube API.
- **React Router DOM:** A library for handling routing within the React application, allowing seamless navigation between different pages and components.
- **Moment.js:** A date manipulation library used to format and display video publish dates and times.
- **Prop-Types:** A type-checking library used in React components to validate the props being passed, ensuring robust and error-free code.
- **Fetch API:** Used to make network requests to the YouTube Data API, retrieving video data dynamically.
- **Webpack:** A module bundler used to compile JavaScript modules, assets, and dependencies into a single bundle.
- **Babel:** A JavaScript compiler used to convert ES6+ code into a format compatible with older browsers, ensuring cross-browser support.




    
