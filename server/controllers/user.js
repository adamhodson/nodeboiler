var fs = require('fs');
var models = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

exports.register = function(request, reply){
    reply.view('register', {
        title: 'Register',
        content: "Register",
        page_path: request.route.settings.id,
        session: JSON.stringify(request.session),
        isLoggedIn: request.auth.isAuthenticated
    });
}

exports.insert_user = function(request, reply){

    var first_name = request.payload.first_name
    var last_name = request.payload.last_name
    var email = request.payload.email
    var username = first_name + '_' + last_name
    var phone = request.payload.phone
    var user_type = request.payload.user_type
    var password = request.payload.password
    
    var pw_hash = bcrypt.hashSync(password, salt);

    models.user.findOrCreate({
        where:{            
            email: email,
        },
        defaults:{
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            username: username,
            user_type: user_type,
            website: '',            
            password: pw_hash
        }
    }).then(function(proposal){
        return reply.redirect('/');
    })

}


exports.login_view = function(request, reply){
    reply.view('login', {
        title: 'Login',
        content: "Login",
        page_path: request.route.settings.id,
        session: JSON.stringify(request.session),
        isLoggedIn: request.auth.isAuthenticated
    });
}

exports.login = function(request, reply){

    var email = request.payload.email
    var password = request.payload.password    
    var pw_hash = bcrypt.hashSync(password, salt);

    

}
