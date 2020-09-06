/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_type', {
    type_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    type_en: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    type_sort: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    type_mid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    type_pid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    type_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    type_tpl: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    type_tpl_list: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    type_tpl_detail: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    type_tpl_play: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    type_tpl_down: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    type_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type_des: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type_union: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type_extend: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_logo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'mac_type'
  });

  Model.associate = function() {

  }

  return Model;
};
