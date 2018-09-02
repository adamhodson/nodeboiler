var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Gallery = sequelize.define('gallery', {
        name: Sequelize.TEXT,
        is_active: Sequelize.BOOLEAN,    
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Gallery.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Test Location',                
                is_active: 1
            }
        })
            .spread(function(gallery){ 
                console.log(gallery)
            })
    });

    return Gallery;
};