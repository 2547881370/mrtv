/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('mac_user', {
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    user_pwd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    user_nick_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    user_qq: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    user_email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    user_phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    user_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_portrait: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    user_portrait_thumb: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    user_openid_qq: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    user_openid_weixin: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    user_question: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    user_answer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    user_points: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_points_froze: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_reg_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_reg_ip: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_login_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_login_ip: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_last_login_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_last_login_ip: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_login_num: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_extend: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_random: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    user_end_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_pid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_pid_2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_pid_3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'mac_user'
  });

  Model.associate = function() {

  }

  return Model;
};
