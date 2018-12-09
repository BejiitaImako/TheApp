var express = require('express');
var server = express();
var message = "Server works on port: ";
var port = process.env.port || 3000;
server.get('/', function(req, res){
    res.sendFile(__dirname + "/Static/TheApp.html");
})
server.listen(port, function(){
    console.log(message+port);
});
