const express = require('express')
const router = express.Router()
const Prod = require('../models/Produto')

router.get('/', (req, res) => {
    Prod.find()
    .then(produtos => res.json(produtos))
    .catch(err => res.status(404).json({NadaEncontrado: 'Nenhum produto cadastrado'}))
})

router.post('/', (req, res) => {
    Prod.create(req.body)
    .then(produtos => res.json({msg: 'Produto cadastrado'}))
    .catch(err => res.status(404).json({error: 'Erro ao cadastrar'}))
    
    
})


module.exports = router;
