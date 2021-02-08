const photos = (sequelize, DataTypes) => {
  const Photos = sequelize.define('photos', {
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

  Photos.associate = models => {
    Photos.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  return Photos;
};

module.exports = photos;
