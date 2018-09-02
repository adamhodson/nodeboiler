var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Calendar = sequelize.define('calendar', {
        name: Sequelize.STRING,                        
        is_active: Sequelize.BOOLEAN,               
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Calendar.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Conference Room Calendar',                                
                is_active:1                                         
            }
        })
            .spread(function(calendar){     
                console.log(calendar)
            })
    });

    return Calendar;
};