# Creating a React/Express server

## Building the backend (Express)
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

**Both servers are now running!**

Now lets fetch data from the backend

Go into the client folder(Our React App), and go to the src directory and create a new components directory
```
mkdir components
```