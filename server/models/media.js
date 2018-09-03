const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    let Media = sequelize.define('media', {
        name: Sequelize.TEXT,
        media_type: Sequelize.TEXT,
        media_url: Sequelize.STRING,                       
    });

    //Find Or Create
    sequelize.sync().then(function() {
        return Media.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                name: 'Test Image',
                media_type: 'image',
                media_url: '/assets/images/image.jpg'                                    
            }
        })
            .spread(function(media){
                console.log(media)
            })
    });

    return Media;
};