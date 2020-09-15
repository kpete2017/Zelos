# Zelos Esports
![Image of Home](https://i.imgur.com/dABssSG.png)

## Live-Site
https://zelosesports.com

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

Bult with React.js for the organization ZelosCompete LTD. The website includes a record of the organizations current news and events as well as the lineup of its multiple teams and a storefront.

The Website Contains :
* A main home page.
* An about page containing information about the company itself.
* A store page containing all availble merchandise.
* A teams page containing every player on each team.

### Built With
* [React.js](https://Reactjs.org/)
* [Google Firebase](https://firebase.google.com/)


<!-- GETTING STARTED -->
## Getting Started

In order to run this project locally you will need [Node.js](https://nodejs.org/en/)

### Prerequisites

In order to install this project you will need the latest version of Node Package Manager
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/kpete2017/Zelos
```
2. Install NPM packages
```sh
npm install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<!-- USAGE EXAMPLES -->
## Usage

### Home Screen
![Image of Home](https://i.imgur.com/geZLiuN.png)

The homescreen is divided into six rows:
* The first row is the Title section which can be found in ./src/components/Title.js.
* The second row is the About section which is just a short description on the organization with a few highlight videos. This can be found in ./src/components/About.js
* The third row is the featured item section which contains selected items from the store. This component can be found in ./src/components/FeaturedItem.js
* The fourth row is the schedule page which contains the 4 closest upcoming events. This component can be found in ./src/components/Schedule.js.
* The fifth row is the Team page which contains a short list of each team followed by each player. This component can be found in .src/components/Teams.js
* The sixth and final row is the sponsors section where all the teams current sponsors will go. This component can be found in ./src/components/Sponsors.js

### About Page
![Image of Notes](https://i.imgur.com/F01QKU8.png)

This page is meant to give a short description of the organization including the games it participates in, contact information, and the business's founding members.
It is split into four sections:
* The first secton is the main about section highlighting the founding of the business.
* The second row is the founders section where all the founding/importatant members are listed.
* The third row is split between the current games section and the contact details section.

### Store Page
![Image of Party](https://i.imgur.com/6tVNAUd.png)

The Store Page contains all available to purchase merchandise

### Team Page
![Image of NPC](https://i.imgur.com/RUEPQkL.png)

The Team page is where every player from every Zelos esport team is listed as well some extra player information such as their social media accounts and a short bio.

<!-- CONTACT -->
## Contact

Kyle Petersen - [Linked-In](https://www.linkedin.com/in/kyle-petersen-27259b18b/) - kpete2017@gmail.com

Project Link: [https://github.com/kpete2017/Zelos](https://github.com/kpete2017/Zelos)
