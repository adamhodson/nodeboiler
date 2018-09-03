'strict';

const fs = require('fs');
const models = require('../models');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const JWT   = require('jsonwebtoken');
const joi   = require('joi');
const uuidv1 = require('uuid/v1');


exports.register = function(request, h){
    
    return h.view('register', {
        title: 'Register',
        content: "Register",
        page_path: request.route.settings.id,
        session: JSON.stringify(request.session),
        isLoggedIn: request.auth.isAuthenticated        
    });
}

exports.insert_user = function(request, h){

    let first_name = request.payload.first_name
    let last_name = request.payload.last_name
    let email = request.payload.email
    let username = first_name + '_' + last_name
    let phone = request.payload.phone
    let user_type = request.payload.user_type
    let password = request.payload.password
    
    let pw_hash = bcrypt.hashSync(password, salt);

    let results = models.user.findOrCreate({
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
                                        }).spread(function(proposal){
                                            return 1;
                                        })
    return results;
}


exports.login_view = function(request, h){    
    return h.view('login', {
        title: 'Login',
        content: 'Login',
        page_path: request.route.settings.id,
        
    });
}

exports.login = function(request, h){

    let email = request.payload.email
    let password = request.payload.password    
    let account = '';
    

    let validation = models.user.findOne({
                            where: {
                                email: email
                            }
                        }).then(user => {
                            if(!user){
                                return "No user with that email";
                            }
                            else{

                                let the_user = user;
                                let user_email = user.email;
                                let submitted_password = password;
                                let stored_pw = user.password;  

                            
                                let authed = bcrypt.compare(submitted_password, stored_pw).then( auth => {
                                    if( auth === true ){
                                        

                                        let uuid = uuidv1();

                                        let sid = String(uuid);                                                                                
                                        console.log(sid)

                                        let account = {
                                            email: user_email,
                                            scope: 'user'
                                        };
                                        
                                        request.server.app.cache.set(sid, { account }, 0);
                                        request.cookieAuth.set({ sid, scope: 'user', uid: the_user.id });

                                      
                                        //return cookie_auth;
                                        return true;

                                    }
                                    else{
                                        return false;
                                    }                                    
                                })
                                return authed; 

                            }
                        })

    return validation;  

}
