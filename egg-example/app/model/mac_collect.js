/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_collect', {
    collect_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    collect_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    collect_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    collect_type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    collect_mid: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    collect_appid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    collect_appkey: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    collect_param: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    collect_filter: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    collect_filter_from: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    collect_opt: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'mac_collect'
  });

  Model.associate = function() {

  }

  return Model;
};
