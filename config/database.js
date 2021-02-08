const { Sequelize } = require('sequelize');
const db = new Sequelize('getreal', 'postgres', 'gomrgvgo!!77', {
    host: 'getreal.cxgbtkv0eyak.us-west-2.rds.amazonaws.com',
    dialect: 'postgres',
    "define": {
	    "createdAt": "created",
	    "updatedAt": "modified"
  	},
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
