var http = require('http'); // Importing http functionality, such as createServer

function onRequest(req, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hey there, this bozo');
    response.end(); // Done with defining reponse
}

http.createServer(onRequest).listen(8000);
