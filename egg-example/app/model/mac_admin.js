/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_admin', {
    admin_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    admin_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    admin_pwd: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: ''
    },
    admin_random: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: ''
    },
    admin_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    admin_auth: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    admin_login_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    admin_login_ip: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    admin_login_num: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    admin_last_login_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    admin_last_login_ip: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'mac_admin'
  });

  Model.associate = function() {

  }

  return Model;
};
