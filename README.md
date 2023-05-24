Note App React Native Expo with Redux
======================================================

## Description
Simple note app

## Pre Installation
Please follow `Installing Dependencies` section found [here](https://facebook.github.io/react-native/docs/getting-started.html)
Also follow the rest of the setup for both ios and android in order to have your environment ready to run the native app on a device or xcode / android avd

## Installation

- EXPO

```
$ git clone https://github.com/allukman/note-app-react-native-expo-redux.git
$ cd note-app-react-native-expo-redux
$ npm install
```

- NGROK

Create new folder for ngrok server

```
$ mkdir note-app-json-server
$ cd note-app-json-server
$ npm init
$ npm install json-server ngrok
```
ngrok setup

Sign up for a free account here: https://dashboard.ngrok.com/signup
Then, download the official Ngrok library for your specific OS rather than the Node port shown in the lectures: https://ngrok.com/download

Then, using your terminal, run the following command:

```
ngrok authtoken YOUR_AUTHTOKEN
```
This command only needs to be done once. Going forward, you can open a tunnel by using your terminal to run the following command (replacing PORT_NUMBER with the port of the backend server):

```
ngrok http PORT_NUMBER
```

## Development

- EXPO

```
// For IOS
react-native run-ios

// For Android
react-native run-android
```

- NGROK

```
npm json-server -w db.json
```

open new terminal

```
npm ngrok http 3000
```
