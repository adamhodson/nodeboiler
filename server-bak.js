'use strict';

/**
* Dependencies.
*/
var Hapi = require('hapi');
var DB = require('./lib/db');
//var Vision = require('vision');
//var Path = require('path');
//var Inert = require('inert');


// Create a new server
const server = new Hapi.Server();

// // Setup the server with a host and port
server.connection({
    port: parseInt(process.env.PORT, 10) || 8000,
    host: 'localhost'
});

// // Setup the views engine and folder
server.views({
    engines: {
        html: require('swig')
    },
    path: './server/views'
});

const defaultContext = {
    root_url: 'http://localhost:3000/'
}


server.state('session', {
    ttl: 24 * 60 * 60 * 1000,
    isSecure: false,
    path: '/',
    encoding: 'base64json'
});


// // Export the server to be required elsewhere.
module.exports = server;


/*
    Load all plugins and then start the server.
    First: community/npm plugins are loaded
    Second: project specific plugins are loaded
 */
 
server.register([
    {
        register: require("good"),
        options: {
            opsInterval: 5000,
            reporters: [{
                reporter: require('good-console'),
                args:[{ ops: '*', request: '*', log: '*', response: '*', 'error': '*' }]
            }]
        }
    },  
    {
        register: require("hapi-assets"),
        options: require('./assets.js')
    },
    {
        register: require("hapi-named-routes")
    },
    {
        register: require("hapi-cache-buster")
    },
    {
        register: require('./server/assets/index.js')
    },
    {
      register: require('./server/front/index.js')
    }
], function () {

    //Start the server
    server.start(function() {
        //Log to the console the host and port info
        console.log('Server started at: ' + server.info.uri);
    });
});



// const start = async () => {
 
//     const server = new Hapi.Server();

//     // Setup the server with a host and port
//     server.connection({
//         port: parseInt(process.env.PORT, 10) || 8000,
//         host: 'localhost'
//     });

//     // // Setup the views engine and folder
//     // server.views({
//     //     engines: {
//     //         html: require('swig')
//     //     },
//     //     path: './server/views'
//     // });

//     const defaultContext = {
//         root_url: 'http://localhost:3000/'
//     }

//     server.state('session', {
//         ttl: 24 * 60 * 60 * 1000,
//         isSecure: false,
//         path: '/',
//         encoding: 'base64json'
//     });


//     // Export the server to be required elsewhere.
//     module.exports = server;

//     await server.register([
//             {
//                 plugin: require('good'),
//                 options: {
//                     opsInterval: 5000,
//                     reporters: [{
//                         reporter: require('good-console'),
//                         args:[{ ops: '*', request: '*', log: '*', response: '*', 'error': '*' }]
//                     }]
//                 }
//             },
//             require('hapi-auth-basic'),
//             {
//                 plugin: require('hapi-assets'), 
//                 options: require('./assets.js')
//             },
//             require('hapi-named-routes'),
//             require('hapi-cache-buster'),
//             require('./server/assets/index.js'),
//             require('./server/front/index.js')

//     ])
    
  
 
//     server.auth.strategy('simple', 'basic', { validate });
//     server.auth.default('simple');

//     await server.start();
 
//     return server;
// };
 
// start().then((server) => console.log(`Server listening on ${server.info.uri}`))
// .catch((err) => {
 
//     console.error(err);
//     process.exit(1);
// });

