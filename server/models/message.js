var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Message = sequelize.define('message', {
        subject: Sequelize.STRING,        
        content: Sequelize.STRING,        
        receiver: Sequelize.INTEGER,
        date: Sequelize.DATE,
        parent_message: { type: Sequelize.INTEGER, allowNull: true, defaultValue: null },
        message_status: Sequelize.BOOLEAN,               
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Message.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                subject: 'Conference Room Calendar',                
                content: 'Hello There',                                
                receiver: 1,
                date: '2018-09-10 00:00:00+00:00',       
                parent_message: null,
                message_status: 1             

            }
        })
            .spread(function(message){                
                console.log(message)
            })
    });

    return Message;
};