# react-micro-frontend
This is a proof of concept that demonstrates using React micro-frontend templates that support hot loading React micro-apps and components based on a users route. The POC renders a mock video site that allow users to search for movies and view their details.

![alt text](https://github.com/eschall/react-micro-frontend/blob/master/documentation/images/react-micro-frontend-poc.png)

## Getting Started

There are three React applications used by this POC. You will need to browse to each applications directory and run the install command.

To get started, clone the repo and run the following commands. It is important to follow the order as outlined below to ensure the micro-apps have been properly built before launching the host application.

### `redbox-details`
```
cd micro-apps/redbox-details
npm i

cd micro-apps/redbox-search
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
