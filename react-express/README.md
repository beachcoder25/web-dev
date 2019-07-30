# Creating a React Express application

This repository showcases my first exposure to React, with the goal of combining it with Express.

I am fascinated by Web-Development, and from completingthis simple project am even moreso interested after seeing how relatively straightforward the process is!

# Building the backend (Express)
Create package.json
```
npm init
```

Install dependencies
```
npm i express concurrently
npm i nodemon --save-dev
```

### Key takeaways
- server.js is our **back-end**

# Building the frontend (React)
Create the CLI for React-App, the -g is for global
```
sudo npm i -g create-react-app
```
Create the React App client directory
```
sudo create-react-app client
```
Now run the React server
```
cd client
npm start
```

# Both servers are now running!

Now lets fetch data from the backend

Go into the client folder(Our React App), and go to the src directory and create a new components directory
```
mkdir components
cd components
mkdir customers
touch customers.jc
```
Now we copy over the syntax from App.js to customers.js and make it so we can integrate the customers.js component into our App.js
```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Customers />
    </div>
  );
}
```

# Last step

As is we have our two servers, Express and React, running in two separate terminals, now we want to make it run in only one.

We will create a **client script** in our package.json to do this, now our script section looks like:
```
"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

# Tutorial Source
https://www.youtube.com/watch?v=v0t42xBIYIs&t=890s