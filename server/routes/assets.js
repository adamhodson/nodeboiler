module.exports = [     
    {
        method: 'GET',
        path: '/partials/{file*}',       
        handler: {
            directory: { 
                path: '../views/partials'
            }
        },
        config:{
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/images/{file*}',       
        handler: {
            directory: { 
                path: '../public/images'
            }
        },
        config:{
            auth: false
        }
        
    },
    {
        method: 'GET',
        path: '/css/{file*}',       
        handler: {
            directory: { 
                path: '../public/css'
            }
        },
        config:{
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/js/{file*}',       
        handler: {
            directory: { 
                path: '../public/js'
            }
        },
        config:{
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/dist/js/{file*}',       
        handler: {
            directory: { 
                path: '../dist/js'
            }
        },
        config:{
            auth: false
        }
    }
]