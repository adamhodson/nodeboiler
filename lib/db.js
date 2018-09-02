var models = require("../server/models");
var Sequelize = require('sequelize');


models.sequelize.sync().then(function () {
    //console.log("Aloooo");
});