var http = require('http');
var fs = require('fs');
var port = 3000;
var server = http.createServer(function(req,res){
if(req.url == '/'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('this is index');
res.end();
}
else if (req.url == '/home'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/Static/TheApp.html').pipe(res);
    //res.write('This is home');
    
}
});
server.listen(port);