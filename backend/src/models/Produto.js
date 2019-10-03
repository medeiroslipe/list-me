const mongoose = require('mongoose')

const ProdSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }

})

module.exports = Prod = mongoose.model('Prod', ProdSchema)