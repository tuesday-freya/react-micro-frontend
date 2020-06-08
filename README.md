# Honeycomb Studio
This micro app proof of concept has evolved into Honeycomb Studio ([microapp.studio](https://microapp.studio)), a low code platform that is under development. The platform utilizes micro apps provided by the platform and/or micro apps provided by the community to allow users to generate web applications without writing code.

[Getting Started Tutorial: How to create a Honeycomb Application](
https://github.com/Schalltech/honeycomb-tutorials/blob/master/tutorials/getting%20started/create%20an%20application/README.md)

#### Deadbox
A port of the movie store from the react-micro-frontend repo.
https://microapp.host/deadpool/deadbox

# react-micro-frontend
This is a proof of concept that demonstrates using React micro-frontend templates that support hot loading React micro-apps and components based on a users route. The orchestration of injected micro-apps and components is completely dynamic and controlled by a site level configuration. 

The POC renders a mock video site that allow users to search for movies and view their details.

![alt text](https://github.com/eschall/react-micro-frontend/blob/master/documentation/images/react-micro-frontend-poc.png)

Visit the [wiki](https://github.com/eschall/react-micro-frontend/wiki) for additional documentation.

## Installation

There are three React applications used by this POC. There is a search application (redbox-search) that retrieves a list of movies based on a provided search term and a details application (redbox-details) that retrieves and displays a movies information by id. Finally there is the host-app that you guessed it, hosts the micro-apps.

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
