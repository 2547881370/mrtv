/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_cj_node', {
    nodeid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lastdate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    sourcecharset: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    sourcetype: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    urlpage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pagesize_start: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pagesize_end: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    page_base: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    par_num: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    url_contain: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    url_except: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    url_start: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: ''
    },
    url_end: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: ''
    },
    title_rule: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    title_html_rule: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type_rule: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    type_html_rule: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_rule: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    content_html_rule: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_page_start: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    content_page_end: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    content_page_rule: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    content_page: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    content_nextpage: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    down_attachment: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    watermark: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    coll_order: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    customize_config: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    program_config: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mid: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'mac_cj_node'
  });

  Model.associate = function() {

  }

  return Model;
};
