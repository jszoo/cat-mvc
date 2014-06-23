/*
* dev
* author: ronglin
* create date: 2014.6.23
*/

var DEFAULT_PORT = 8000;
var argv_port = process.argv[2];
var server_port = argv_port || DEFAULT_PORT;

//var webServer = require('./cms/node/webServer');
//webServer.create(argv_port || DEFAULT_PORT);

var webServer = require('./cms/global');
webServer.listen(server_port, function() {
    console.log('DEV Server Start! PORT:' + server_port);
});
