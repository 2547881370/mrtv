/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_msg', {
    msg_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    msg_type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    msg_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    msg_to: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    msg_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    msg_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    msg_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'mac_msg'
  });

  Model.associate = function() {

  }

  return Model;
};
