# Useful commands

### Change permissions on file/folder
If you are logged in as a user this will change the permission to give you access
```
sudo chown -R $(whoami) ~/.npm
```

### Stop application running on a specific port
This kills the app running on port 4200
```
kill -9 $(lsof -t -i:4200)
```

# JWT

We have created two routes localhost:5000/api (Unprtoected) and localhost:5000/api/posts (Protected)

```
app.post('/api/login', (req, res) => {
```
This is where our request for our token is made, through a post request we can see the token created
```
"token": "eyJhbGc..."
```