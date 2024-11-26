# Social Network API

## Description
A backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built using Express.js for routing, MongoDB for the database, and Mongoose ODM.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Demo](#demo)

## Installation
1. Clone the repository
2. Install dependencies with `npm install`
3. Ensure MongoDB is installed and running
4. Start the server with `npm start`

## Usage
The API provides the following functionality:
- Create, read, update, and delete users
- Add and remove friends from a user's friend list
- Create and delete thoughts
- Add and remove reactions to thoughts

## API Routes

### User Routes
- GET `/api/users` - get all users
- GET `/api/users/:userId` - get single user by ID
- POST `/api/users` - create a new user
- PUT `/api/users/:userId` - update a user
- DELETE `/api/users/:userId` - delete a user

### Friend Routes
- POST `/api/users/:userId/friends/:friendId` - add a friend
- DELETE `/api/users/:userId/friends/:friendId` - remove a friend

### Thought Routes
- GET `/api/thoughts` - get all thoughts
- GET `/api/thoughts/:thoughtId` - get single thought by ID
- POST `/api/thoughts` - create a new thought
- PUT `/api/thoughts/:thoughtId` - update a thought
- DELETE `/api/thoughts/:thoughtId` - delete a thought

### Reaction Routes
- POST `/api/thoughts/:thoughtId/reactions` - create a reaction
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - delete a reaction

## Technologies Used
- Express.js
- MongoDB
- Mongoose
- Node.js

## Demo
[Link to Walk