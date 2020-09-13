/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_level', {
    integral_age: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    },
    time_day: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    },
    time_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'user_level'
  });

  Model.associate = function() {

  }

  return Model;
};
