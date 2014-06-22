var webServer = require('./cms/node/webServer');

var DEFAULT_PORT = 8000;
var argv_port = process.argv[2];

webServer.create(argv_port || DEFAULT_PORT);