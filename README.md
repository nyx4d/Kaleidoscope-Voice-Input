Audio Visualizer using Three.js

This project is a 3D audio visualizer built using Three.js. It visualizes microphone audio input in real-time by scaling and rotating 3D kaleidoscopic geometries. The application creates different kaleidoscope effects based on single and double-click interactions.
Features

    Real-time Audio Visualization: Visualizes sound from the user's microphone.
    Interactive Click Events:
        Single Click: Resets the kaleidoscope with a new set of objects.
        Double Click: Creates a denser kaleidoscope for a more intense effect.
    Dynamic Kaleidoscope: 3D objects respond to the audio frequency, scaling and rotating based on sound intensity.

Demo
Single Click:

    Resets and creates a new kaleidoscope with a standard number of objects.

Double Click:

    Resets and creates a kaleidoscope with double the objects for a denser visualization.

Table of Contents

    Installation
    Usage
    How It Works
    Project Structure
    License

Installation

To run the project locally, follow these steps:

    Clone the repository:

    bash

    git clone https://github.com/nyx4d/audio-visualizer-threejs.git
    cd audio-visualizer-threejs

    Open the project:
        Simply open the index.html file in your browser.
        The project works entirely in the browser using microphone input, so ensure your browser supports getUserMedia.

Usage

Once the project is loaded:

    Microphone Access: Allow the browser to access your microphone when prompted.
    Visualization: The kaleidoscopic visualization reacts to your audio input.
    Click Interactions:
        Single Click: Resets the kaleidoscope to a new state.
        Double Click: Resets the kaleidoscope and doubles the number of visual objects for a more intense effect.

How It Works

    Audio Input:
        The app uses the Web Audio API to access your microphone via navigator.mediaDevices.getUserMedia().
        The audio data is processed by an AnalyserNode, which provides real-time frequency data for visualizing sound.

    Kaleidoscope Creation:
        A set of 3D IcosahedronGeometry objects is created and positioned randomly in the scene.
        The number of objects can increase based on user interaction (click events).

    Visualization:
        Each 3D object scales and rotates dynamically based on the frequency data from the AnalyserNode. The higher the sound intensity, the larger the objects become.

    User Interactions:
        Single Click: Resets the kaleidoscope with a new configuration.
        Double Click: Resets and doubles the number of 3D objects in the scene for a more complex visualization.

Project Structure

bash

audio-visualizer-threejs/
│
├── index.html      # Main HTML file, loads Three.js and app.js
├── app.js          # Main JavaScript file, initializes the scene, audio, and visualization
├── README.md       # Project documentation (this file)
├── assets/         # Any additional resources like images or models (optional)
└── styles/         # CSS files for styling (optional)

    index.html: The main entry point that sets up the canvas, initializes the audio, and loads the app.js script.
    app.js: This file contains all the logic for handling the Three.js scene, the Web Audio API, and user interactions (clicks).
    assets/: Store any assets like images, models, or textures in this folder.
    styles/: For any CSS styles that might be needed for the application UI.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Additional Notes

    This visualizer requires microphone access to function properly. Make sure you allow the browser to access your microphone when prompted.
    Tested and works on Chrome, Firefox, and Edge. Some mobile browsers may have limited support for Web Audio API and Three.js rendering capabilities.

Feel free to modify and extend the project to fit your needs!
