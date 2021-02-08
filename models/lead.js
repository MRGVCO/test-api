const lead = (sequelize, DataTypes) => {
  const Lead = sequelize.define('lead', {
    business_id: {
      type: DataTypes.INTEGER
    },
    first_name: {
      type: DataTypes.TEXT
    },
    last_name: {
      type: DataTypes.TEXT
    }, 
    email: {
      type: DataTypes.TEXT
    }, 
    phone: {
      type: DataTypes.TEXT
    }, 
    reason: {
      type: DataTypes.STRING
    },
    progress: {
      type: DataTypes.INTEGER
    },
    residence: {
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.STRING
    }
  });


  Lead.associate = models => {
    Lead.hasMany(models.Message, { onDelete: 'CASCADE' });
  };


  return Lead;
};

module.exports = lead;
