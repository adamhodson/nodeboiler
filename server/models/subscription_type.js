var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var SubscriptionType = sequelize.define('subscription_type', {
        name: Sequelize.TEXT,
        slug: Sequelize.TEXT,
        term: Sequelize.TEXT,
        price: Sequelize.INTEGER,
        description: Sequelize.STRING,                
        website: Sequelize.STRING,
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return SubscriptionType.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Desk Subscription',
                slug: 'desk-subscription',
                term: 'monthly',
                price: 599,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, excepturi voluptatum veniam maxime iure animi voluptatem rerum accusantium, vero facere error temporibus. Assumenda ipsam, voluptatibus animi tenetur, facere autem magnam!',
                website: 'http://www.google.com',
                locationId: 1
            }
        })
            .spread(function(subscriptiontype){
                console.log(subscriptiontype)
            })
    });

    return SubscriptionType;
};