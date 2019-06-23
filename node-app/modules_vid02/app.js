var http = require('http'); // Importing http functionality, such as createServer
var module1 = require('./module1');
var module2 = require('./module2');


function onRequest(req, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write('Hey there, this bozo\n');
    // response.write(module1.myString);
    response.write('Hey there, this bozo\n');
    response.write(module2.myVariable);
    module2.myFunction();

    response.end(); // Done with defining reponse
}

http.createServer(onRequest).listen(8000);
