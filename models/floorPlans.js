const floorPlans = (sequelize, DataTypes) => {
  const FloorPlans = sequelize.define('floorPlans', {
    name: {
      type: DataTypes.STRING
    },
    firebaseName: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.JSON
    },
    business_id: {
      type: DataTypes.INTEGER
    },
    url:{
      type: DataTypes.STRING
    },
    uid:{
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    order:{
      type: DataTypes.INTEGER
    },
    created: {
      type: DataTypes.STRING
    },
    modified: {
      type: DataTypes.STRING
    }
  });

  FloorPlans.associate = models => {
    FloorPlans.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  return FloorPlans;
};

module.exports = floorPlans;
