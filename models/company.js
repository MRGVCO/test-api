const company = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    buildings: {
       type: DataTypes.JSON
    },
    name: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.TEXT
    },
    photo: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    verified: {
      type: DataTypes.BOOLEAN
    },
    userId : {
      type: DataTypes.INTEGER
    },
    created: {
      type: DataTypes.STRING
    },
    modified: {
      type: DataTypes.STRING
    }
  });

  Company.associate = models => {
    Company.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  return Company;
};

module.exports = company;
