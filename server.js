
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const root = __dirname;

const serverStatic = function(response,file){
	let fileToServe = path.join(root,file);
	let stream = fs.createReadStream(fileToServe);

	stream.on('data',function(chunk){
		response.write(chunk);
	});
	stream.on('end',function(){
		response.end();
	});
};

// ======================================

const route = {
	routes : {},
	for: function(method,path,handler){  // HTTP methods
		this.routes[method+path] = handler;
	}
}


// serving static files - begin
route.for("GET","/jquery-3.3.1.min.js", function(request,response){
	serverStatic(response,"public/jquery-3.3.1.min.js");
});

route.for("GET","/", function(request,response){
	serverStatic(response,"public/index.html");
});
// serving static files - end

// ======================================

function onRequest(request,response){
	let pathname = url.parse(request.url).pathname;
	console.log("Request for "+request.method + pathname+" received.");

	// a switch statement
	if (typeof route.routes[request.method+pathname] === 'function'){
		route.routes[request.method+pathname](request,response);
	} else {
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.end("Four-O-Four NOT FOUND :P"); // is like write+end
	}
}

http.createServer( onRequest ).listen(9999);
console.log("Server has started...");
