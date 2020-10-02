/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_code_relation', {
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
    },
    user_pwd: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_code_relation'
  });

  Model.associate = function() {

  }

  return Model;
};
