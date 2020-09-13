/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_task', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    typeName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    integral: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    }
  }, {
    tableName: 'user_task'
  });

  Model.associate = function() {

  }

  return Model;
};
