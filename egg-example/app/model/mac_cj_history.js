/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_cj_history', {
    md5: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'mac_cj_history'
  });

  Model.associate = function() {

  }

  return Model;
};
