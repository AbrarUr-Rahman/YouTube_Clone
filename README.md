#YouTube Clone

A YouTube-like video streaming application built with React, utilizing the YouTube Data API for fetching video content. The app allows users to browse popular videos by category, view detailed video pages, and more.
Table of Contents

    Features
    Demo
    Installation
    API Configuration
    Usage
    Technologies Used
    Contributing
    License

#Features

    Browse popular videos by category
    Responsive design for mobile and desktop
    Video detail page with related videos and comments
    Search for videos by keyword
    Light and dark mode support

#Demo

Check out the live demo of the project here.
Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone

Install dependencies:

bash

npm install

Start the development server:

bash

    npm start

    The app will be available at http://localhost:3000.

API Configuration

To fetch data from the YouTube API, you need to set up your API keys:

    Get API Key:
        Go to the Google Developer Console.
        Create a new project and enable the YouTube Data API v3.
        Generate an API key.

    Switch API Keys on Quota Exceeded:

    You can manage your API keys in the data.js file. If your quota is exceeded for one key, the app can automatically switch to another:

    javascript

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

    Use getAPIKey() to get the current key and switchAPIKey() to move to the next key if one exceeds the quota.

Usage

    Browse Videos: Browse through various categories to find trending videos.
    Search: Use the search bar to find videos by keyword.
    Video Detail: Click on any video to view it in detail, along with related videos and channel information.

Technologies Used

    React: Frontend library for building the UI
    React Router: For navigation between pages
    YouTube Data API v3: For fetching video data
    Moment.js: For formatting dates
    PropTypes: For type-checking React props
    CSS: For styling the components

Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature-branch).
    Open a Pull Request.

License

This project is licensed under the MIT License - see the LICENSE file for details.
