/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_topic', {
    topic_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_sub: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    topic_sort: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_letter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    topic_color: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    topic_tpl: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    topic_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_pic_thumb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_pic_slide: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_des: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_blurb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_remarks: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    topic_level: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_up: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_down: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0'
    },
    topic_score_all: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_score_num: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_hits: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_hits_day: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_hits_week: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_hits_month: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_time_add: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_time_hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_time_make: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    topic_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_rel_vod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topic_rel_art: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topic_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topic_extend: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'mac_topic'
  });

  Model.associate = function() {

  }

  return Model;
};
