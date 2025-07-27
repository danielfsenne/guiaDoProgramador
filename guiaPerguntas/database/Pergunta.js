const Sequelize = require("sequelize")
const connection = require('./database')

const Pergunta = connection.define(
  'Pergunta',
  {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    tableName: 'Pergunta',                   
    timestamps: true                         
  }
);

Pergunta.sync({ force: false })
  .then(() => console.log("Tabela criada"))
  .catch(console.error);


module.exports = Pergunta

