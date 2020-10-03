/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_zt', {
    mac_zt_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mac_zt_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mac_zt_content_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mac_zt_content_txt: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mac_zt_video_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'mac_zt'
  });

  Model.associate = function() {

  }

  return Model;
};
