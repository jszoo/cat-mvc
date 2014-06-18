var webserver = require('./lib/webServer');

var DEFAULT_PORT = 8000;
var argv_port = process.argv[2];

webserver.create(argv_port || DEFAULT_PORT);