# OAuth with github 

This repo will show how to use github for authentication purposes on the MERN stack

## Steps
1. Redirect user to github page with a specific parameter to authenticate with
2. Redirected back to your site
3. Will gain access if authentication is suc cessful
4. You can now make calls, determined by the scope you have

## New Oauth Application in github  
**Homepage URL:** http://localhost:9000/ 

**Authorization callback URL:**** http://localhost:9000/user/signin/callback 

## REACT 
client->app->components
- We made changes to point to our localhost:9000 where the app will be hosted

## Grab your application URL
From your OAuth app page
```
GET https://github.com/login/oauth/authorize
```

# Tutorial source
https://www.youtube.com/watch?v=wcUdBgktd4s&t=972s

## Additional resources
- https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

# Good to knows
Insert blank line in HTML
```
<br />
```