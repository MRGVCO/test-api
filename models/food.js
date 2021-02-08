const food = (sequelize, DataTypes) => {
  const Food = sequelize.define('food', {
    text: DataTypes.STRING,
  });

  Food.associate = models => {
    Food.belongsTo(models.User);
  };

  return Food;
};

module.exports = food;
