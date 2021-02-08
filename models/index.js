const Sequelize = require('sequelize');
const config = require('../config');


const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {     
    port: config.db.port,
    host: config.db.host,
    logging: console.log,
    define: {
        timestamps: false
    },  
    dialect: 'postgres',
  },
);



const models = {
  User: require('./user'),
  Business: require('./business'),
  Company: require('./company'),
  Amenity: require('./amenity'),
  Photos: require('./photos'),
  FloorPlans: require('./floorPlans'),
  Message: require('./message'),
  Apartment: require('./apartment'),
  Lead: require('./lead'),
  Email: require('./email'),
  Design: require('./design'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

exports.sequelize = sequelize
module.exports = models;

