var Index = require('../controllers/index');
var About = require('../controllers/about');
var User = require('../controllers/user');
var Location = require('../controllers/locations');

module.exports = [
     {
        method: 'GET',
        path: '/',
        config: {
            handler: Index.index,
            id: 'index'
        }
    },
    {
        method: 'GET',
        path: '/about',
        config: {
            handler: About.about,
            id: 'about'
        }
    },    
    {
        method: 'POST',
        path: '/add-location',
        config: {
            handler: Location.insert_location,
            id: 'add-location'
        }
    },
    {
        method: 'GET',
        path: '/register',
        config: {
            handler: User.register,
            id: 'register'
        }
    },    
    {
        method: 'POST',
        path: '/register',
        config: {
            handler: User.insert_user,
            id: 'insert-user'
        }
    },    
    {
        method: 'GET',
        path: '/login',
        config: {
            handler: User.login_view,
            id: 'login-view'
        }
    },    
    {
        method: 'POST',
        path: '/login',
        config: {
            handler: User.login,
            id: 'login'
        }
    }
]


// const routes = [
    // {
    //     method: 'GET',
    //     path: '/',
    //     config: {
    //         handler: Index.index,
    //         id: 'index'
    //     }
    // },
    // {
    //     method: 'GET',
    //     path: '/about',
    //     config: {
    //         handler: About.about,
    //         id: 'about'
    //     }
    // },    
    // {
    //     method: 'POST',
    //     path: '/add-location',
    //     config: {
    //         handler: Location.insert_location,
    //         id: 'add-location'
    //     }
    // },
    // {
    //     method: 'GET',
    //     path: '/register',
    //     config: {
    //         handler: User.register,
    //         id: 'register'
    //     }
    // },    
    // {
    //     method: 'POST',
    //     path: '/register',
    //     config: {
    //         handler: User.insert_user,
    //         id: 'insert-user'
    //     }
    // },    
    // {
    //     method: 'GET',
    //     path: '/login',
    //     config: {
    //         handler: User.login_view,
    //         id: 'login-view'
    //     }
    // },    
    // {
    //     method: 'POST',
    //     path: '/login',
    //     config: {
    //         handler: User.login,
    //         id: 'login'
    //     }
    // }
// ];
 
// exports.routes = server => server.route(routes);


// // These are the public assets. Goal is to serve css, js, partials, images, or bower packages.
// exports.register = function(server, options, next){

//    server.route([
       
//         {
//             method: 'GET',
//             path: '/',
//             config: {
//                 handler: Index.index,
//                 id: 'index'
//             }
//         },
//         {
//             method: 'GET',
//             path: '/about',
//             config: {
//                 handler: About.about,
//                 id: 'about'
//             }
//         },    
//         {
//             method: 'POST',
//             path: '/add-location',
//             config: {
//                 handler: Location.insert_location,
//                 id: 'add-location'
//             }
//         },
//         {
//             method: 'GET',
//             path: '/register',
//             config: {
//                 handler: User.register,
//                 id: 'register'
//             }
//         },    
//         {
//             method: 'POST',
//             path: '/register',
//             config: {
//                 handler: User.insert_user,
//                 id: 'insert-user'
//             }
//         },    
//         {
//             method: 'GET',
//             path: '/login',
//             config: {
//                 handler: User.login_view,
//                 id: 'login-view'
//             }
//         },    
//         {
//             method: 'POST',
//             path: '/login',
//             config: {
//                 handler: User.login,
//                 id: 'login'
//             }
//         }
//     ]);

//     next();
// }

// exports.register.attributes = {
//     name: 'front'
// };