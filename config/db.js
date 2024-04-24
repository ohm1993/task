import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', 'admin12#$', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
