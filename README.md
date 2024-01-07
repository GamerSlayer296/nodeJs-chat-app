# Chat App

Welcome to Chat App repository!

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li><a href="#future-enhancements">Future Enhancements</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>


## Overview

![image](https://github.com/GamerSlayer296/nodeJs-chat-app/assets/117532468/624d192f-61b1-4792-9e3f-6299a7dddaf9)


This project presents a real-time chat application designed to facilitate seamless communication between users. Built using a combination of Node.js, Express, Socket.io, and front-end technologies, the application allows users to join chat rooms, exchange messages, share locations, and view active users in a room.

### Technologies Used
* __Backend__: Node.js, Express
* __Real-time Engine__: Socket.io
* __Frontend Frameworks__: Mustache.js, Moment.js, Qs
* __Styling__: Custom CSS (styles.min.css)
* __Additional Libraries__: Google Maps API (for location sharing)

## Key Features

1. **User Authentication & Room Selection:**

* Users are prompted to enter a display name and select a chat room upon joining.
  
 ![image](https://github.com/GamerSlayer296/nodeJs-chat-app/assets/117532468/562ddc48-9208-488e-8079-58a10c38e4a7)


* The server validates and stores user information to maintain unique user identities.
  
2. **Real-time Messaging:**

* Integrated with Socket.io, the application supports real-time messaging between users in the same chat room.
  
  ![image](https://github.com/GamerSlayer296/nodeJs-chat-app/assets/117532468/7fd44131-2b9a-4470-b9bb-d2c60aeabaca)

* Messages are rendered dynamically on the user interface, providing a seamless chatting experience.

3. **Location Sharing:**

* Users have the option to share their current location with other participants.
  
  ![image](https://github.com/GamerSlayer296/nodeJs-chat-app/assets/117532468/3f9d63b9-55f7-402e-8ffa-88d83e27408c)

* Shared locations are displayed as clickable links, redirecting users to Google Maps with the respective location coordinates.

4. **User Interface:**

* The application boasts a user-friendly interface with distinct sections for chat messages and a sidebar displaying active users.
* Messages are formatted using Mustache.js templates, providing a structured and consistent layout.



## Future Enhancements

While the current version offers fundamental chat functionalities, potential enhancements may include:

* Implementing user authentication for personalized experiences.
* Enhancing the UI/UX design for improved aesthetics and usability.
* Introducing multimedia support, allowing users to share images, videos, and files.

## Getting Started
To run this project locally:

1. Clone the repo
   ```sh
   git clone https://github.com/GamerSlayer296/nodeJs-chat-app.git
   ```
2. navigate to the project directory
   ```sh
     cd chat app
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. start the server
   ```sh
   npm start
   ```
5. Open http://localhost:3000 in your web browser to access the application.

<p align="right">(<a href="#sooshi">back to top</a>)</p>


