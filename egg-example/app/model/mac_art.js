/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_art', {
    art_id: {
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
    group_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_sub: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_letter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    art_color: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    art_from: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    art_author: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    art_tag: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    art_class: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_pic_thumb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_pic_slide: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_blurb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_remarks: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    art_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    art_tpl: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    art_level: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_lock: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_points: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_points_detail: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_up: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_down: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_hits: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_hits_day: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_hits_week: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_hits_month: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_time_add: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_time_hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_time_make: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0'
    },
    art_score_all: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_score_num: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    art_rel_art: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_rel_vod: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_pwd: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    art_pwd_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    art_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    art_note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    art_content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mac_art'
  });

  Model.associate = function() {

  }

  return Model;
};
