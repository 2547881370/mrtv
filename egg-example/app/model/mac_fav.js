/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_fav', {
    fav_ulog_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fav_user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_mid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_type: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_rid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_sid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_nid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_points: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    fav_ulog_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'mac_fav'
  });

  Model.associate = function() {

  }

  return Model;
};
