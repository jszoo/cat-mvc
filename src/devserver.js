var webserver = require('./webserver');

var DEFAULT_PORT = 8000;
var argv_port = process.argv[2];

webserver.create(argv_port || DEFAULT_PORT);