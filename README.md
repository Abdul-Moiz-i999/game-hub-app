# Gamehub Application React + TypeScript Project Using Vite 

![image](https://github.com/Abdul-Moiz-i999/game-hub-app/assets/67798125/7c581ac4-4119-4618-91b6-5ca8883ccb0d)
### Deployed App (Vercel):
https://game-check-rawgapi-app.vercel.app

## Description

This project is a web application developed using React and TypeScript, built with the Vite development tool. The application's primary purpose is to showcase various video games, providing users with information such as game covers and ratings, all of which is fetched from the RAWG API. The project boasts several advanced features and follows best practices in web development.

### Key Features and Technologies:

React with TypeScript: The project leverages React, a highly popular and efficient JavaScript library for creating user interfaces, and TypeScript to enhance the development process by adding strong typing.

**Vite:**
>1. The choice of Vite as the development tool brings advantages in terms of speed and efficiency during development. It empowers a fast development experience with rapid builds and hot module replacement.

**Chakra UI:**
>2. Styling is achieved through Chakra UI, a flexible and customizable component library for React. The application's visual presentation is professionally designed with a focus on user experience.

**Light Mode and Dark Mode**
>3. The application incorporates a custom-modified light and dark mode feature, enhancing user accessibility and catering to personal preferences.

**Custom Hooks:**
>4. Custom hooks are utilized to encapsulate and reuse logic across different parts of the application. This promotes code modularity and maintainability.

**API Calls:** 
>5. The project effectively handles asynchronous data retrieval from the RAWG API, ensuring seamless and efficient communication with external data sources.

**ContextAPI:**
>6. The Context API is employed to manage global application state, providing a structured and centralized approach to sharing data and functionality across components.

**Static Data and Services:**
>7.  The application integrates static data and services to optimize code refactoring. This modular approach contributes to maintainability and scalability.

## Instructions To Setup

### Yarn: ###
```
yarn
yarn start
```
### Npm: ###
```
npm i
npm run dev or npm start
```
### Getting Your Own API Key:
1. Sign up for https://rawg.io
2. Get your api key 
3. Go to **src -> services -> api-client.ts** in the Project
<img width="374" alt="get-apikey" src="https://github.com/Abdul-Moiz-i999/game-hub-app/assets/67798125/4633f629-9c9c-4543-aca8-4e0d70874e55">

4. Paste your **api-key** in the **Key** property in the  _params_  object
