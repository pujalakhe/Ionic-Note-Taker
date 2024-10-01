# Note Taker

A simple and intuitive note-taking application that allows users to create, manage, and organize notes in real-time. Built with Ionic, Angular, and Firebase, this app provides a seamless experience across devices.

## Features

- **Real-time Data Synchronization:** Automatically sync notes across devices using Firebase Realtime Database.
- **CRUD Operations:** Create, read, update, and delete notes easily.

## Technologies Used

1. **Ionic:** Framework for building cross-platform mobile applications.
2. **Angular:** A platform for building dynamic web applications.
3. **Firebase:** Backend-as-a-Service (BaaS) for real-time data storage and authentication.
4. **TypeScript:** A superset of JavaScript that provides static typing.

## Installation

1.  **Clone the repository:**

        git clone
        git@github.com:pujalakhe/Ionic-Note-Taker.git
        cd note-app

2.  **Install the dependencies:**

        npm install

## Configuration

1.  **Set up Firebase**

    Create a new project in Firebase Console.
    Enable Firebase Realtime Database and Firebase Authentication.

         npm i -g firebase-tools

        firebase login

        firebase init

2.  **Add Firebase SDK**
    Make sure you have the Firebase SDK installed

        npm add @angular/fire

## Running the Application

To run the application locally, use:

    ionic serve/ionic s

## Usage

- **Creating a Note**: Click on the add icon in top right corner enter your note title and description, and save.
- **Editing a Note**:Slide to the left on the any note card to reveal edit option
- **Deleting a Note**: Slide to the left on the any note card to reveal the delete option.
