# React Template
This template includes all the dependencies and set up needed for you to work within defined code standards and structure to get you up and running quickly.

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Other important tidbits](#other-important-tidbits)
    - [React Dev Tools](#react-dev-tools)
    - [Deploying on Netlify](#deploying-on-netlify)
___

## Get Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="1015" alt="usetemplate" src="https://user-images.githubusercontent.com/29741570/197042557-60175adb-a0ac-4da2-89a6-78592770d1ab.png" />

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="844" alt="createproject" src="https://user-images.githubusercontent.com/29741570/197042535-de365ae9-7564-4a33-8357-6d9baee37b8f.png" />

3. Clone your new repo to your local machine
4. Go to the **NEXT** section

## Starting the Project
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name
1. Open the `/public/index.html` file and change the `title` attribute to the name of your application
1. Rename the `.env.local.sample` file to `.env.local` file. The final file name should be `.env.local`
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short
1. From your command line, be in the root directory and run `npx husky install`
1. To start your application, run `npm start`

### If you see this, you are set to go!
<img width="857" alt="Screen Shot 2022-10-20 at 2 40 18 PM" src="https://user-images.githubusercontent.com/29741570/197042395-46923893-3ef6-4667-919d-8f9b591481f2.png" />

## Creating Your Authentication in Firebase
1. Navigate to [Firebase](https://console.firebase.google.com/)
1. Create a new project
1. Add authentication to the project
1. Copy the API Key into the `.env.local` file
1. Copy the Project ID into the `.env.local` file being sure to only update the `YOUR_PROJECT_ID` with the value
1. Stop your development server if it is running, then restart.
1. You should be able to log in to your app!

**NOTES:** 
- You do NOT need quotes around the values in your `.env.local` file
- Changes you make to the project will make the browser reload on save...no more hard refresh unless something goes wrong.

## Other Important Tidbits
### React Dev Tools
From this time forward, you will be expected to have a clean console in order for your assignments to be approved. Use [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to help with debugging.
### Including Images with React
If you have a folder of local images that you want to load into your code things get a little strange with webpack.  Remember the only way webpack knows about assets is if they are imported into your javascript files.  Even our CSS is not added until those files are imported into our javascript files.  Below is some sample code for how to load a local image file into your project

```js
import cat from './assets/cat.jpg';

<>
  <img src={cat} alt="picture of a cat"/>
</>

```

### Deploying on Netlify

- Build Command: `yarn build`
- Publish directory: `build`
- **Add Environmental Variables (NOT REQUIRED for Apps that do not use API Keys, etc)**
    - Any Enviromental variables you are using in your `.env.local` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.
- **Update Firebase URL Settings**
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
