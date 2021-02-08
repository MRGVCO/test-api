const business = (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },    
    region: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    neighborhood: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    logo: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    website_template: {
      type: DataTypes.BOOLEAN
    },
    apartment: {
      type: DataTypes.BOOLEAN
    },
    amenities: {
      type: DataTypes.BOOLEAN
    },
    photos: {
      type: DataTypes.BOOLEAN
    },
    payments: {
      type: DataTypes.BOOLEAN
    },
    company: {
      type: DataTypes.INTEGER
    },
    created: {
      type: DataTypes.STRING
    },
    modified: {
      type: DataTypes.STRING
    },
  });

  Business.associate = models => {
    Business.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Business.findByLogin = async login => {
    let user = await Business.findOne({
      where: { username: login },
    });

    if (!business) {
      business = await Business.findOne({
        where: { email: login },
      });
    }

    return business;
  };

  return Business;
};

module.exports = business;
