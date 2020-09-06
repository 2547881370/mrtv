/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_actor', {
    actor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    type_id_1: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_alias: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_lock: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_letter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    actor_sex: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    actor_color: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    actor_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_blurb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_remarks: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    actor_area: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    actor_height: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    actor_weight: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    actor_birthday: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    actor_birtharea: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    actor_blood: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    actor_starsign: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    actor_school: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    actor_works: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_class: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    actor_level: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_time_add: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_time_hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_time_make: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_hits: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_hits_day: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_hits_week: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_hits_month: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0'
    },
    actor_score_all: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_score_num: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_up: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_down: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    actor_tpl: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    actor_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    actor_content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mac_actor'
  });

  Model.associate = function() {

  }

  return Model;
};
