/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_vod', {
    vod_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: DataTypes.INTEGER(6),
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
    vod_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_sub: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_letter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    vod_color: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    vod_tag: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    vod_class: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_pic_thumb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_pic_slide: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_actor: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_director: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_writer: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    vod_behind: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    vod_blurb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_remarks: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    vod_pubdate: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    vod_total: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_serial: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'
    },
    vod_tv: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_weekday: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_area: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    vod_lang: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    vod_year: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    vod_version: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_state: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_author: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    vod_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    vod_tpl: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_tpl_play: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_tpl_down: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    vod_isend: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_lock: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_level: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_copyright: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_points: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_points_play: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_points_down: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_hits: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_hits_day: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_hits_week: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_hits_month: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_duration: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    vod_up: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_down: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0'
    },
    vod_score_all: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_score_num: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_time_add: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_time_hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_time_make: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_trysee: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_douban_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_douban_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0'
    },
    vod_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_rel_vod: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_rel_art: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_pwd: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    vod_pwd_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_pwd_play: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    vod_pwd_play_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_pwd_down: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    vod_pwd_down_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_play_from: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_play_server: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_play_note: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_play_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_down_from: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_down_server: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_down_note: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vod_down_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_plot: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vod_plot_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_plot_detail: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mac_vod'
  });

  Model.associate = function() {

  }

  return Model;
};
