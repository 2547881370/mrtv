/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sign_record', {
    user_id: {
      type: DataTypes.INTEGER(10),
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
    },
    continue_sign_month: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    }
  }, {
    tableName: 'sign_record'
  });

  Model.associate = function() {

  }

  return Model;
};
