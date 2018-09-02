'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
    port: 8000,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});

const defaultContext = {
    root_url: 'http://localhost:3000/'
}

const init = async () => {

    // await server.register([             
    //     require('inert'),        
    //     require('vision')        
    // ]);

     await server.register([
        require('inert'),        
        require('vision'),  
        {
            plugin: require('hapi-router'),
            options: {
                routes: 'server/routes/*.js'                
            }
        }
    ]);

    server.views({
        engines: {
            html: require('swig')
        },
        path: './server/views'
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();