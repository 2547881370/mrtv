/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_code', {
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'user_code'
  });

  Model.associate = function() {

  }

  return Model;
};
