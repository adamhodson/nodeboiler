var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define('user', {
        first_name: Sequelize.TEXT,
        last_name: Sequelize.TEXT,
        email: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        username: Sequelize.STRING,        
        website: Sequelize.STRING,
        user_type: Sequelize.STRING,
        password: Sequelize.STRING,
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return User.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                first_name: 'Adam',
                last_name: 'Hodson',
                email: 'adam@adam.com',
                phone: 305919292,
                username: 'adamhodson',                                
                website: 'http://www.google.com',
                user_type: 'tenant',
                password: 'Test123!'
            }
        })
            .spread(function(user){
                console.log(user)
            })
    });

    return User;
};