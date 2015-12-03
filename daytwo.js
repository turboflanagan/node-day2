// if http were not a core module, we would need to npm install it first.
var http = require('http');
var url = require('url');
var fs = require('fs');
// var homePageHtml = fs.readFileSync('home-page.html');

function homePage(request, response){
	response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.end('<h1>HOME PAGE</h1>');
}

var server = http.createServer(function(request, response){
	var pathName = url.parse(request.url)
	if(pathName.pathname = '/'){
		//User wants to see the home page
		homePage(request, response);
	}else if(pathName.pathname == '/about'){
		//the user wants to see the about page
		response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.end('<h1>ABOUT PAGE</h1>');
	}else{
		response.writeHead(200, {
		'content-type': 'text/html'
		});
	response.end('<h1>We did it!</h1>');
	}
});

server.listen(3939);
console.log('the server is listening on port 3939');





