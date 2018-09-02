var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Event = sequelize.define('event', {
        name: Sequelize.STRING,        
        date: Sequelize.DATE,        
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Event.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Scheduled Meeting with Client',                
                date: '2018-09-10 00:00:00+00:00',
                calendarId: 1                                    
            }
        })
            .spread(function(event){                
                console.log(event)
            })
    });

    return Event;
};