'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Bcrypt = require('bcrypt');
const DB = require('./lib/db');


const server = Hapi.server({
    port: 8001,
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



// const validate = async (request, session) => {

//     const cached = await server.app.cache.get(session.id);
// //    const cached = await server.app.cache.get(session.id);

//     console.log('hu')
//     console.log(cached)
//     // return 1;

//     const out = {
//         valid: !!cached
//     };

//     if (out.valid) {
//         out.credentials = cached.account;
//     }

//     return out;
 
// };


const init = async () => {

    await server.register([        
        require('hapi-auth-cookie')
    ])

    server.state('session', {
        ttl: 24 * 60 * 60 * 1000,
        isSecure: false,
        path: '/',
        encoding: 'base64json'
    });

    const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
    server.app.cache = cache;

    server.auth.strategy('session', 'cookie',
      { 
        password: 'NeverShareYourSecretNeverShareYourSecretNeverShareYourSecretNeverShareYourSecretNeverShareYourSecretNeverShareYourSecretNeverShareYourSecretNeverShareYourSecret',          // Never Share your secret key        
        isSecure: false,
        clearInvalid: true,
        ttl: 24 * 60 * 60 * 1000,
        validateFunc: async (request, session) => {

            const cached = await cache.get(session.sid);
            const out = {
                valid: !!cached
            };

            if (out.valid) {
                out.credentials = cached.account;
            }

            return out;

        }
        // verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    });

    // server.auth.default('jwt'); 

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