var http = require('http'); // Importing http functionality, such as createServer
var fs = require('fs');


function onRequest(req, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if (error){
            response.writeHead(404);
            response.write('File aint here bud');
        } else{
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);
