var webserver = require('./lib/webserver');

var DEFAULT_PORT = 1337;
var argv_port = process.env.VMC_APP_PORT;

webserver.create(argv_port || DEFAULT_PORT);