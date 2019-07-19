const http = require('http')
const fs = require('fs')

// Use readFileSync to ensure all .html pages load before executing on server
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((request, response) =>{ // Callback is executed once http_server is created
    console.log(request.url)

    if(request.url === '/about') {

        return response.end(aboutPage)

    } else if (request.url === '/contact') {
        
        return response.end(contactPage)

    } else if (request.url === '/') {

        return response.end(homePage)
    } else{

        response.writeHead(404)

        response.end('Page twas not foundeth')

    }


})

server.listen(3000)