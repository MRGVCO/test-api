const apartment = (sequelize, DataTypes) => {
  const Apartment = sequelize.define('apartment', {
    title: {
      type: DataTypes.STRING
    },
    apt_number: {
      type: DataTypes.STRING
    },
    bedrooms: {
      type: DataTypes.INTEGER
    },
    business_id: {
      type: DataTypes.INTEGER
    },
    bathrooms: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.INTEGER
    },
    availability: {
      type: DataTypes.STRING
    },
    amenities: {
      type: DataTypes.JSON
    },
    description: {
      type: DataTypes.STRING
    },
    size : {
      type: DataTypes.INTEGER
    },
    on_market : {
      type: DataTypes.BOOLEAN
    },
    featured: {
      type: DataTypes.BOOLEAN
    },
    created: {
      type: DataTypes.STRING
    },
    modified: {
      type: DataTypes.STRING
    }
  });

  return Apartment;
};

module.exports = apartment;
