var express = require('express');
var server = express();
var message = "Server works on port: ";
var port = process.env.port || 3000;
server.get('/', function(req, res){
    res.send('Welcome to The App!');
})
server.listen(port, function(){
    console.log(message+port);
});
