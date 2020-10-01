/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_advertisement', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    url_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    jump: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'mac_advertisement'
  });

  Model.associate = function() {

  }

  return Model;
};
