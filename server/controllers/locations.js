var fs = require('fs');
var models = require('../models');


exports.insert_location = function(request, reply){

    var user_id = 1
    var location_name = request.payload.location_name
    var location_slug = request.payload.location_slug
    var location_address = request.payload.location_address
    var location_city = request.payload.location_city
    var location_state = request.payload.location_state
    var location_zip = request.payload.location_zip
    var location_phone = request.payload.location_phone
    var location_website = request.payload.location_website

    models.location.findOrCreate({
        where:{
            userId: user_id,
            name: location_name,
        },
        defaults:{
            slug: location_slug,
            address: location_address,
            city: location_city,
            state: location_state,
            zip: location_zip,
            phone: location_phone,
            website: location_website
        }
    }).then(function(proposal){
        return reply.redirect('/');
    })


}
