var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Amenity = sequelize.define('amenity', {
        name: Sequelize.TEXT,
        description: Sequelize.STRING,        
        is_schedulable: Sequelize.BOOLEAN,             
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Amenity.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Test Location',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nostrum tenetur cupiditate ipsam, accusantium dolores, porro beatae iusto, sequi tempore culpa illo quia fugit laborum ipsa id omnis sunt, nulla.',                
                is_schedulable: 1
                        
            }
        })
            .spread(function(amenity){                
                console.log(amenity)
            })
    });

    return Amenity;
};