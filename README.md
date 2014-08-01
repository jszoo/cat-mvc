cat-mvc
=======

The best nodejs MVC framework in .NET MVC style. It's fully implemented the main features of .NET MVC. And will include more and more features step by step. I first build this project for personal practicing purpose. But I was moved when this project going more and more better. I think it's now good enough in the production environment use. I will be very pleased if this project is help to you.

Features
---------

+ Classical MVC structure, controllers + models + views + areas.
+ Intuitive routes, be the benefit from the separated controller files. It's much more graciously than define serials of url pattern.
+ Dynamic data inject, we can get the request parameters directly from the action function (also support object inject). Again, it's awesame graciously than get string data from req.body/req.params.
+ Multiple MVC instance support.
+ Multiple view engines, allows multiple view engines run together in one site. Now supports ejs + vash. Will add the support to other engines step by step.
+ Clearly code structure, low code invasion. Good for study or maintenance.

Installation
-------------

```shell
$ npm install cat-mvc
```

Simple Usage
------------

```javascript
// global.js
var http = require('http');
var mvc = require('cat-mvc');
//
var app = mvc({ appPath: __dirname });
var server = http.createServer(mvc.handler()); // handler all request here
server.listen(8000, function() { console.log('Server Start!'); });
```

Sample Site
--------

Clone the [sample repo](https://github.com/jszoo/cat-mvc-sample-site.git), then install the dev dependencies and run start.
```shell
$ git clone https://github.com/jszoo/cat-mvc-sample-site.git
$ npm install
$ npm start
```

Site File Structure
--------------------

If you are familiar with .NET MVC, you might already known well about the site file structure.

```
|-- areas
|   |-- account
|   |   |-- controllers
|   |   |   |-- auth.js    // assume contains actions: login/logon
|   |   |-- models
|   |   |   |-- loginModel.js
|   |   |-- views
|   |   |   |-- auth
|   |   |   |   |-- login.html
|   |   |   |   |-- logon.html
|   |   |   |-- shared
|   |   |   |   |-- layout.html
|   |   |-- area.js        // area events subscription
|-- controllers
|   |-- home.js            // assume contains action: index
|   |-- user.js            // assume contains actions: list/item
|-- models
|   |-- userModel.js
|-- views
|   |-- home
|   |   |-- index.html
|   |-- user
|   |   |-- list.html
|   |   |-- item.html
|   |-- shared
|   |   |-- layout.html
|-- global.js
```

Area
--------

In the classical .NET MVC site files structure, you don't need to care the area registration. The only one you need to do is to supply the root site path as application path for cat-mvc.

```javascript
// global.js
var mvc = require('cat-mvc');
var app = mvc({ appPath: __dirname });
// supply the appPath and the "app.areas.registerAll()" will be called in internal
```

We recommend to use the classical style structure as it's already be familiar to all .NET MVC fans. But you also can customize the areas as you want.

```javascript
var mvc = require('cat-mvc');
var app = mvc();

// the main register api
// areaRouteExpression: rule of path-to-regexp module "/:controller?/:action?"
// defaultRouteValues: object as format "{ controller: 'home', action: 'index' }"
app.areas.register(areaPath, areaName, areaRouteExpression, defaultRouteValues);

// a sugar api to "app.areas.register".
// only the root controllers/views etc will be loaded. we recognize this as RootArea
app.areas.registerRoot(rootPath);

// a sugar api to "app.areas.register".
// register one area by the specified areaPath + areaName
app.areas.registerArea(areaPath, areaName);

// a sugar api to "app.areas.registerArea".
// all the area folders under specified areasPath will be registered
app.areas.registerAreas(areasPath);

// to unload area
app.areas.unload(areaName);

// to unload root area
app.areas.unloadRoot();

// to customize default folder names
app.set('folderNames.areas', 'areas');
app.set('folderNames.views', 'views');
app.set('folderNames.shared', 'shared');
app.set('folderNames.models', 'models');
app.set('folderNames.controllers', 'controllers');
```

Controller
-----------

We take auth.js controller for example.

```javascript
// areas/account/controllers/auth.js

var mvc = require('cat-mvc');

mvc.controller(function(req, res, session, end) {

    // GET /account/auth/admin
    this.action('admin', function() {
        if (!session.loggedin) {
            end.redirectToAction('login');
        } else {
            // when the view name is same to action name it's
            // no need to specify path or name of the view file
            end.view();
        }
    });

    // GET /account/auth/login
    this.action('login', function() {
        if (session.loggedin) {
            end.redirectToAction('admin');
        } else {
            end.view();
        }
    });

    // POST /account/auth/login
    this.action('login', 'httpPost', function(UserName, Password) {
        if (UserName === 'admin' && Password === 'admin') {
            session.loggedin = true;
            end.redirectToAction('admin');
        } else {
            end.redirectToAction('login');
        }
    });

    // it's also support the way below to define GET action
    // GET /account/auth/logout
    this.logout = function() {
        session.destroy();
        end.redirectToAction('login');
    };

    //.... other actions
});
```

Action
-----------

Coming soon...

License 
--------

[MIT](LICENSE)
