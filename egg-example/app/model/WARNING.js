/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('WARNING', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    warning: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Bitcoin_Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'WARNING'
  });

  Model.associate = function() {

  }

  return Model;
};
