# vue-firebase-auth-project
This project is a Vue.js web application that utilizes the composition API of Vue 3, along with TypeScript and Vite for rapid development. It features user authentication through Firebase and uses Pinia for state management.

## Deployment:

The live version of this project can be viewed [here](https://nimish-vue-firebase-authentication.netlify.app/).




## Features

- **Firebase Authentication**: Users can log in using their username and password.
- **Pinia State Management**: User session details are managed with Pinia for reactivity and persistence.
- **Protected Routes**: The dashboard page is protected and only accessible to authenticated users.
- **Persistent Sessions**: Sessions persist on refresh, keeping users logged in.
- **User Dashboard**: Displays user details and provides a logout option.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/))
- [Vue CLI](https://cli.vuejs.org/): `npm install -g @vue/cli`

## Project Setup

To get the project up and running on your local machine, follow these steps:

1.Clone the repository:
   git clone https://github.com/nimish1499/vue-firebase-auth-project.git:

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need Node.js and npm installed on your system to run the project. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nimish1499/vue-firebase-auth-project.git
cd vue-firebase-auth-project

2. Navigate to the project directory:
   ```sh
     cd [projectname]
3. Install the Dependencies:
   ```sh
   npm i --legacy-peer-deps
4. Running the Application:
   ```sh
   npm run dev

Runs the app in the development mode.\

5. Building for Production:
```sh
   npm run build
This creates a dist folder with all the production-ready files.



