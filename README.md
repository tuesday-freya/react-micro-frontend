# react-micro-frontend
This is a proof of concept that demonstrates using React micro-frontend templates that support hot loading React micro-apps and components based on a users route. The POC renders a mock video site that allow users to search for movies and view their details.

![alt text](https://github.com/eschall/react-micro-frontend/blob/master/documentation/images/react-micro-frontend-poc.png)

## Installation

There are three React applications used by this POC. There is a details application (redbox-details) that retrieves and displays a movies information and a search application (redbox-search) that retrieves a list of movies based on a search term. Finally there is the host-app that you guessed it, hosts the micro-apps.

To get started, clone the repo and run the following commands. It is important to follow the order as outlined below to ensure the micro-apps have been properly built before launching the host application.

### `redbox-details`
```
cd micro-apps/redbox-details
npm i
npm run build
```

### `redbox-search`
```
cd micro-apps/redbox-search
npm i
npm run build
```

### `host-app`
```
cd host-app
npm i
npm start
```
