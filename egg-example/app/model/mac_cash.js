/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_cash', {
    cash_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    cash_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    cash_points: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    cash_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    cash_bank_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    cash_bank_no: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    cash_payee_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    cash_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    cash_time_audit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'mac_cash'
  });

  Model.associate = function() {

  }

  return Model;
};
