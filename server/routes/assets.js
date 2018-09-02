module.exports = [     
    {
        method: 'GET',
        path: '/partials/{file*}',       
        handler: {
            directory: { 
                path: '../views/partials'
            }
        }
    },
    {
        method: 'GET',
        path: '/images/{file*}',       
        handler: {
            directory: { 
                path: '../public/images'
            }
        }
    },
    {
        method: 'GET',
        path: '/css/{file*}',       
        handler: {
            directory: { 
                path: '../public/css'
            }
        }
    },
    {
        method: 'GET',
        path: '/js/{file*}',       
        handler: {
            directory: { 
                path: '../public/js'
            }
        }
    },
    {
        method: 'GET',
        path: '/dist/js/{file*}',       
        handler: {
            directory: { 
                path: '../dist/js'
            }
        }
    }
]