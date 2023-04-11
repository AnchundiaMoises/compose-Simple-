const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConceptosSchema = new Schema({
  descripcion: String
});

const ConceptosModel = mongoose.model('Concepto', ConceptosSchema);

module.exports = ConceptosModel;