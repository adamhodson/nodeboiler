var fs        = require("fs");
var path      = require("path");

const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodeboiler', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

let db = {};

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });


//Create Associations
let User = db.user,
    Location = db.location,
    Amenity = db.amenity,
    Event = db.event,
    Calendar = db.calendar,
    Media = db.media,
    Message = db.message,
    SubscriptionType = db.subscription_type,
    Gallery = db.gallery    


//Associations

//User Assocations
// User.hasMany(Location);
// Location.belongsTo(User);

// User.hasMany(Message);
// Message.belongsTo(User);



Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});



//End Associations

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;    