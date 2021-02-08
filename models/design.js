const design = (sequelize, DataTypes) => {
  const Design = sequelize.define('design', {
    business_id: {
      type: DataTypes.INTEGER
    },
    primary: {
      type: DataTypes.TEXT
    },
    secondary: {
      type: DataTypes.TEXT
    },
    header: {
      type: DataTypes.TEXT
    }, 
    copy: {
      type: DataTypes.TEXT
    },
    template: {
      type: DataTypes.INTEGER
    },
    created: {
      type: DataTypes.STRING
    },
    modified: {
      type: DataTypes.STRING
    }
  });


  Design.associate = models => {
    Design.hasMany(models.Message, { onDelete: 'CASCADE' });
  };


  return Design;
};

module.exports = design;

   