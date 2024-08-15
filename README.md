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

    
