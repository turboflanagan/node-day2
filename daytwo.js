// if http were not a core module, we would need to npm install it first.
var http = require('http');
var url = require('url');
var fs = require('fs');
// var homePageHtml = fs.readFileSync('home-page.html');

function homeContent(){
	var html = "<h1>This is the home page</h1>";
	return html;
}

function aboutContent(){
	var html = "<h1>Becoming a Builder of Things!</h1>";
	return html;
}

function contactContent(){
	var html = "<p>Peter Flanagan</p><br>";
	html += "<p>Cell: 404-319-9715</p><br>";
	html += "<p>Email: turboflanagan@gmail.com</p><br>";
	html += "<p>website: www.turboflanagan.com</p>";
	return html;
}

function createPage(request, response, page){
	response.writeHead(200, {
			'content-type': 'text/html'
		});
	if(page == 'home'){
		response.end(homeContent());
	}else if(page == 'about'){
		response.end(aboutContent());
	}else if(page == 'contact'){
		response.end(contactContent());
	}
};

var server = http.createServer(function(request, response){
	var pathName = url.parse(request.url)
	if(pathName.pathname == '/'){
		//User wants to see the home page
		createPage(request, response, 'home');
	}else if(pathName.pathname == '/about'){
		//the user wants to see the about page
		createPage(request, response, 'about');
	}else if(pathName.pathname == '/contact'){
		//the user wants to see the about page
		createPage(request, response, 'contact');
	}else{
		response.writeHead(200, {
		'content-type': 'text/html'
		});
	response.end('<h1>We did it!</h1>');
	}
});

server.listen(3939);
console.log('the server is listening on port 3939');





