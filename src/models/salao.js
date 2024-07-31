const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
  nome: {
    Type: String,
    required: [true, 'Nome é obrigado'],
  },
  foto: String,
  capa: String,
  email: {
    Type: String,
    required: [true, 'Email é obrigado'],
  },
  senha: String,
  telefone: String,
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
  },
  geo: {
    tipo: String,
    cordinates: Array,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

salao.index({ geo: '2dsphere' });

module.exports = mongoose.model('Salao', salao);
