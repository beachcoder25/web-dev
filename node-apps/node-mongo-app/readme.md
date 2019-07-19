# Building a Node.js Application with MongoDB

**package.json** 
- To track all of the files in our project we must have the file:
    ```
    package.json
    ```
- We can create this file by running the following command, answering the setup questions defines the package.json file
    ```
    npm init
    ```
- Now we can run a framework such as Express
```
npm install express
```

And this will add a new dependency to our package.json file:
```
"dependencies": {
    "express": "^4.17.1"
  },
  ```

# Good to knows

### How to kill a node server (Incase you use ctrl + z to exit, instead of ctrl + c):
```sh
sudo fuser -k 80/tcp   
```

### Change VS Code settings.json file (Changed line height):
```sh
$HOME/.config/Code/User/settings.json
```
#### And then append the line:
```sh
"editor.lineHeight": 56,
```
# Source

https://www.youtube.com/watch?v=bsZGpQxTcHY&t=145s