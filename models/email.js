const email = (sequelize, DataTypes) => {
  const Email = sequelize.define('email', {
    business_id: {
      type: DataTypes.INTEGER
    },
    mail_to: {
      type: DataTypes.TEXT
    },
    mail_id: {
      type: DataTypes.TEXT
    },
    mail_from: {
      type: DataTypes.TEXT
    }, 
    mail_cc: {
      type: DataTypes.TEXT
    },
    bucket: {
      type: DataTypes.TEXT
    }, 
    status: {
      type: DataTypes.TEXT
    }, 
    subject: {
      type: DataTypes.TEXT
    },
    plain: {
      type: DataTypes.TEXT
    },
    html: {
      type: DataTypes.TEXT
    },
    created: {
      type: DataTypes.STRING
    }
  });


  Email.associate = models => {
    Email.hasMany(models.Message, { onDelete: 'CASCADE' });
  };


  return Email;
};

module.exports = email;

   