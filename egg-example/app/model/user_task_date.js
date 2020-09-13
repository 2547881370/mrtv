/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_task_date', {
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    }
  }, {
    tableName: 'user_task_date'
  });

  Model.associate = function() {

  }

  return Model;
};
