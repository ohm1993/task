import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', 'admin12345', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
