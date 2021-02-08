const amenity = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('amenity', {
    name: {
      type: DataTypes.TEXT
    }, 
    type: {
      type: DataTypes.STRING
    },
    business_id: {
      type: DataTypes.INTEGER
    },
    created: {
      type: DataTypes.STRING
    }
  });

  Amenity.associate = models => {
    Amenity.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Amenity.findByLogin = async login => {
    let user = await Amenity.findOne({
      where: { username: login },
    });

    if (!amenity) {
      amenity = await Amenity.findOne({
        where: { email: login },
      });
    }

    return amenity;
  };

  return Amenity;
};

module.exports = amenity;
