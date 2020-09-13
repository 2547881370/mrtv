/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sign_record', {
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_month: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mask: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'sign_record'
  });

  Model.associate = function() {

  }

  return Model;
};
