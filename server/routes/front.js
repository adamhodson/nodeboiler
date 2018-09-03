const Index = require('../controllers/index');
const About = require('../controllers/about');
const User = require('../controllers/user');
const Location = require('../controllers/locations');
const Joi = require('joi');

module.exports = [
     {
        method: 'GET',
        path: '/',
        config: {
            handler: Index.index,
            id: 'index',
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/about',
        config: {
            handler: About.about,
            id: 'about',
            auth: {
                    strategy: 'session',
                    scope: 'user'
                },
            plugins: { 'hapi-auth-cookie': { redirectTo: '/login'} }

        }
    },    
    {
        method: 'POST',
        path: '/add-location',
        config: {
            handler: Location.insert_location,
            id: 'add-location',
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/register',
        config: {
            handler: User.register,
            id: 'register',
            auth: false
        }
    },    
    {
        method: 'POST',
        path: '/register',
        config: {
            handler: User.insert_user,
            id: 'insert-user',
            auth: false
        }
    },    
    {
        method: 'GET',
        path: '/login',
        config: {            
            handler: User.login_view,
            id: 'login-view',
            auth: false
        }
    },    
    {
        method: 'POST',
        path: '/login',
        config: {
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().min(2).max(200).required()
                }
            },
            handler: User.login,
            id: 'login',
            auth: false
        }
    }
]

