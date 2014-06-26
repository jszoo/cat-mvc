/*
* httpMethod
* author: ronglin
* create date: 2014.6.26
*/

var httpMethod = {

    // Asks to get the thing (resource / file) at the requested URL.
    GET: 'GET',

    // Asks the server to accept the body info attached to the request, and give it to the thing at the requested URL It’s like a fat GET... a GET with extra info sent with the request.
    POST: 'POST',

    // Asks for only the header part of whatever a GET would return. So it’s just like GET, but with no body in the response. Gives you info about the requested URL without actually getting back the real thing.
    HEAD: 'HEAD',

    // Asks for a loopback of the request message, so that the client can see what’s being received on the other end, for testing or troubleshooting.
    TRACE: 'TRACE',

    // Says to put the enclosed info (the body) at the requested URL.
    PUT: 'PUT',

    // Says to delete the thing (resource / file) at the requested URL.
    DELETE: 'DELETE',

    // Asks for a list of the HTTP methods to which the thing at the requested URL can respond.
    OPTIONS: 'OPTIONS',

    // Says to connect for the purposes of tunneling.
    CONNECT: 'CONNECT'
};

module.exports = {

    methods: httpMethod,

    exists: function(method) {
        if (!method) { return false; }
        return (method.toUpperCase() in httpMethod);
    }
};