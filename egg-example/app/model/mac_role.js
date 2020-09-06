/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_role', {
    role_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_rid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    role_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    role_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_lock: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_letter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    role_color: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    role_actor: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    role_remarks: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    role_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    role_sort: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_level: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_time_add: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_time_hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_time_make: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_hits: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_hits_day: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_hits_week: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_hits_month: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0'
    },
    role_score_all: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_score_num: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_up: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_down: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    role_tpl: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    role_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    role_content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mac_role'
  });

  Model.associate = function() {

  }

  return Model;
};
