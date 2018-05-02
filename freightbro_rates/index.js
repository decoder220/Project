



var http = require('http');

function onRequest(request,response) {
	// body...
	var fs = require("fs");
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('/home/fb/NodeApp/abc.html',null, function(error,data){
		if(error){
			response.writeHead(404);
			response.write('File not found!')
		} else{
			response.write(data);
           
		}
	
	}
	);
	
} 
http.createServer(onRequest).listen(8000);
