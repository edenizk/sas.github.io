I am sorry for the Read me I will fix it soon

21st April 2019

S.A.S.

(Spotify album searcher)

### WWW ​: ​https://spotify-album-searcher.herokuapp.com

**Git:** ​https://github.com/edenizk/sas.github.io
**Inspired By** ​: DevTips - ​https://www.youtube.com/playlist?list=PLqGj3iMvMa4LFqyGab_aR7M0zfQm2KTuX

## By Ergin Deniz Kosecioglu

## 1 - OVERVIEW

It is a Spotify application, it is a simple searcher for albums in the Spotify database. You
can see details of the album, you can go inside the album and learn more about it and also you
can preview the tracks inside the album. Currently, you can visit it in Heroku web-server It has
made for Allegro intern front-end position.

## 2 - GOALS

```
Create a frontend application in any technology that uses the Spotify API
(Https://developer.spotify.com/documentation/web-api/reference/).
The application should meet the following criteria:
```
1. you can search any album by album name
2. albums matching the search can be seen on the album list
3. the following album information is displayed on the album list:
    a. Photo of the album
    b. Album name
    c. Artist
    d. Release date
    e. by the number of songs in the album
4. you can sort the list of albums after the release date or alphabetically after the album
    name
5. you can see the details of the selected album:
    a. Duration of the entire album
    b. Popularity
    c. Tracks inside album


```
d. an additional element could be the possibility to listen to the sample if it is
available
```
## 3 - How to Install It?

```
You can go to this link for the preview -> ​https://spotify-album-searcher.herokuapp.com
```
### First, you will need to set up backend folder.

### Backend folder is taken from --> ​https://github.com/mpj/oauth-bridge-template

### After cloning the folder you will need to go to backend folder and put given

### command to your shell. you will need to replace XXX and YYY with your Spotify

### client id and Spotify client secret.

## For Linux v

## export SPOTIFY_CLIENT_ID=XXXX

## export SPOTIFY_CLIENT_SECRET=YYYY

## npm start

## For windows v

## set SPOTIFY_CLIENT_ID=XXXX

## set SPOTIFY_CLIENT_SECRET=YYYY

## npm start

### NOTE: windows sometimes don't want to set until you will restart your

### computer. You can check if you set it correctly from the Environment

### variables window.


## 4 - Components Diagram

## 5 - Development Tools

## React Sweet Progress

### A way to quickly add a react progress bar to your app

### for more -> ​ ​https://www.npmjs.com/package/react-sweet-progress

## Query-string

### Parses and stringifies URL query string


### for more -> ​ ​https://www.npmjs.com/package/query-string

## 6 - Problems

```
● The CSS file is way too long and possible solution is to divide into components.
● It is not possible to open in internet explorer and in edge, it doesn’t show SVG elements.
It needs to be optimized
● The browser back button turns back to sign in page. A possible solution is to handle
searches and overlays in backend and push to browser history.
```
## 7 - Conclusion

S. A. S. is an album searcher which contains information about the searched album. The
biggest challenge and fun of the project was, to learn to react, node.js, Spotify API and also learn
more than basic javascript in 10 days.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
