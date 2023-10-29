# Youtube-API-proj
This Full stack Video app i created utilizing the MERN stack is an video platform similar to youtube but with my own creative twist that enables users to search for videos & more using the Youtube API that has been implemented in the program. Moreover, it provides authentication features where users can register and sign in, enhancing the user experience.

# Project Description
This application is a comprehensive platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to explore educational videos with the added advantage of a personalized experience after signing up. The backend handles user registration, authentication, and data management, while the frontend ensures a responsive and intuitive user interface.

# Tech Stack
* # Backend
* Node.js: A runtime environment to run JavaScript on the server.
* Express.js: A web application framework for Node.js
* MongoDB: This is a NoSQL database to store user data
* Mongoose: Object data library(ODM) for MongoDB and Node.js
* JWT(jsonwebtoken): This is used to create access tokens for secure API requests
* bcryptjs: For hashing passwords
* joi: This a library used for Data Validation
* dotenv: Environemnt variable loader

* # Frontend
* React.js: This is a JavaScript library for building user interfaces
* Axios: Promise-based HTTP client for JavaScript
* react-router-dom: DOM bindings for React Router
* CSS modules: to style components.


# Features and Functionalities
* User Registration: New users can sign up by providing basic information.
* User Login: Registered users can log in and access the platform
* Video Exploration: Utilizes the Youtube API to allow users to search and view educational videos
* Protected Routes: Some routes are protected and only authenticated users can access them
* Responsive design: The design of this project is responsive and works on both desktop and mobile devices

# Screenshots:
Img 1/Register page:
![Screenshot 2023-10-22 011305](https://github.com/Ade-212/Youtube-API-proj/assets/143139190/01842366-7234-4172-8fa2-bcf87a2d2a27)


Img 2/Login page:
![Screenshot 2023-10-22 011326](https://github.com/Ade-212/Youtube-API-proj/assets/143139190/26d50107-f09b-4ea0-9c3c-31409f697bba)


Img 3/ Platform page:
![Screenshot 2023-10-22 011350](https://github.com/Ade-212/Youtube-API-proj/assets/143139190/4db4bdf3-d53b-4500-82e8-300c5e850560)


How to install and Run the Project
Clone the repository:
git clone [repository-url]

Navigate to the project directory:
cd [project-directory]

Installing Backend Dependencies:
Navigate to the backend directory and install the necessary libraries:
cd backend npm install express mongoose jwt-simple bcryptjs joi dotenv cors

Installing Frontend Dependencies:
Navigate to the frontend directory and install the necessary libraries:
cd client npm install react react-dom axios react-router-dom

Setting up Environment Variables:
In the backend directory, create a .env file and set up your environment variables such as:
DB_CONNECTION=your_mongodb_uri TOKEN_SECRET=your_secret_key PORT=5000

Running the Backend:
In the backend directory:
npm start Running the Frontend:

In the frontend (client) directory:
npm start Open a browser and navigate to http://localhost:3001 to view the application.

Contributing:
Fork the repository.
Create a new branch: 'git checkout -b branch-name'.
Commit changes: 'git commit -m' .
Push to the branch: 'git push origin branch name'
If you have any questions feel free to reach out to me via email: Ade.212@outlook.com
