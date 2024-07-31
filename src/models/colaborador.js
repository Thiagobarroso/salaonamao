const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
  nome: String,
  telefone: String,
  email: String,
  senha: String,
  foto: String,
  dataNascimento: String,
  sexo: String,
  status: String,
  contaBancaria: {
    titular: String,
    cpfCnpj: String,
    banco: String,
    tipo: String,
    agencia: String,
  },
});

module.exports = mongoose.model('Colaborador', colaborador);
