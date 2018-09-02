var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Location = sequelize.define('location', {
        name: Sequelize.TEXT,        
        slug: Sequelize.STRING,
        address: Sequelize.STRING,
        city: Sequelize.TEXT,
        state: Sequelize.STRING,        
        zip: Sequelize.INTEGER,
        phone: Sequelize.INTEGER,
        website: Sequelize.STRING,
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Location.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Test Location',                
                slug: 'test-location',
                address: '1234 Test Street',
                city: 'Miami',
                state: 'FL',                                
                zip: 33180,
                phone: 3059991234,
                website: 'http://www.google.com'                
            }
        })
            .spread(function(location){
                console.log(location)
            })
    });

    return Location;
};