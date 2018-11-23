# coligo-challenge
A react/redux app challenge 

### [DEMO](https://calm-tundra-90801.herokuapp.com/)

## Here are some comments about the solution:
- The challenge was done using webpack only (no boilerblates) 
- The challenge was done using pure CSS3 with SASS preprocessor
- The icons used are from [Fontawesome](https://fontawesome.com/icons) 
- All components are written in a reusable style
- The API is a [json-server](https://github.com/typicode/json-server) under my github account with some data and integrated it with both announcementsService/quizzesServce, The API has two endpoints:
  - [GET All Announcments](https://my-json-server.typicode.com/abkreno/json-server/announcements)
  - [GET Al Quizzes](https://my-json-server.typicode.com/abkreno/json-server/quizzes)
- The http package used is the default [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Unfortunetly I didn't have time to write any tests :( , If i would i will use [Jest](https://jestjs.io/) along with [React Testing Lib](https://github.com/kentcdodds/react-testing-library)
- The app is deployed [here](https://calm-tundra-90801.herokuapp.com/) using herouku
- The challenge took me ~3 working days

## Run the app:

```
npm i
npm run dev
```

## Build:

```
npm run build
```

## Build for production

```
npm run build-prod
```
