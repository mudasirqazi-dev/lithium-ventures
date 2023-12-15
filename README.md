# Getting Started with Lithium Ventures

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run it

You can do following steps to run this on your computer:

- Get the source code
  - If you're getting it from GitHub, then clone the repository
  - If you're getting it from \*.zip file, then extract the files from zip
- Install dependencies
  - Open your Terminal/CMD in the directory where `package.json` file is present
- Run the app
  - Run command `npm install` to install all dependencies
  - Run command `npm start` to start the project on your local machine, it will open it by defualt on `http://localhost:3000/`
- Get production build
  - To get an optimized production build, run the command `npm build` and it will generate a `build` folder at the root of your project directory. You put this build folder on your server to deploy it

## Framework I choose

You gave option to use either ReactJS or NextJS. I know both of these technologies but I'm best at `ReactJS`, therefore I choose to use ReactJS for this application.

## Architecture of the application

The application did not had a lot of features but still I tried to match the architecture with a big and scaleable application. I've created separate files and folders to keep things more readable and scaleable. Here is a little detail of all the folders

- `components` - keeps all the application components
- `controls` - keeps all the styled components/controls
- `media` - keeps all the images
- `pages` - keeps all the pages with respect to the URL, as we've only one page therefore it will contain only one file
- `services` - keeps all the API calling logic and methods, a separate file for all the methods for an API entity and as we've a single API entity, therefore there's only one service file
- `types` - keeps all the types that are shared between pages and components
- `utils` - any extra logic or method needed will go in this folder
- `utils/constants.ts` - this file will contain application level global constants, for example, I kept the API URL here so that its easily accessable in whole application
- `utils/enums.ts` - this file is to keep all the enums. It was not really required in this small project but as I mentioned, I wanted to show the best possible architecture. I've created an enum for the type of a payment record
- `utils/utils.ts` - this file contains general purpose functions to easily access in whole application e.g., I've created a separate function to format the currency and date time

## Live demo

- I was able to connect my GitHub repository with the Vercel (https://vercel.com/) that I use for almost all of my projects. This project is also linked with Vercel's automatic CI/CD system and for each commit I make on GitHub, it automatically deploys it on a server and provides a live URL.

  Here is the live demo URL: https://lithium-ventures.vercel.app/

## My protfolio and recent projects

For more details about me and my recent projects, please visit my portfolio

https://mudasirqazi-dev.vercel.app/

https://mudasirqazi-dev.vercel.app/projects
