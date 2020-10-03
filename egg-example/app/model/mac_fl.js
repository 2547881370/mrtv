/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_fl', {
    mac_fl_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mac_fl_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mac_fl_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mac_fl_status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    mac_fl_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'mac_fl'
  });

  Model.associate = function() {

  }

  return Model;
};
