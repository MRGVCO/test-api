const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  user_id: {
    type: Sequelize.STRING,
    unique: true
  },
  tenant_level: {
    type: Sequelize.INTEGER
  },
  f_name: {
    type: Sequelize.STRING
  },
  l_name: {
    type: Sequelize.STRING
  },
  phone : {
    type: Sequelize.STRING
  },
  about: {
    type: Sequelize.TEXT
  },
  photo: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN
  },
  last_login : {
    type: Sequelize.STRING
  },
  verified: {
    type: Sequelize.BOOLEAN
  },
  created: {
    type: Sequelize.STRING
  },
  modified: {
    type: Sequelize.STRING
  },
  business_id: {
    type: Sequelize.JSON
  },
  company_id:{
    type: Sequelize.INTEGER
  },
  user_level: {
    type: Sequelize.INTEGER
  }
});



module.exports = User;
