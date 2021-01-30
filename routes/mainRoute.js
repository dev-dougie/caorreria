const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Walker')
const Walker = mongoose.model('walkers')

//Rendering landing page
router.get('/',  (req, res) => {
    res.render('myPages/index', {style: 'index.css'})
})

router.get('/cadastro', (req, res) => {
    res.render('myPages/createWalker', {style: 'createWalker.css'})
})

router.post('/cadastro/novo', (req, res) => {
    const newWalker = {
        name: req.body.name,
        photo: req.body.photo,
        phone: req.body.phone,
        city: req.body.city,
        age: req.body.age,
        about: req.body.about,
        prices: {
            price1: req.body.price1,
            price2: req.body.price2,
            price3: req.body.price3
        }
    }



    new Walker(newWalker).save()
    .then(() => {
        res.send('<a href = "/" style = "font-family: Roboto"><h2>Cadastro efetuado com sucesso!</h2></h1>')
        console.log('Walker was saved succesfully!')
    })
    .catch(err =>{
        console.log('Error to save walker' + err)
    })
})


router.get('/listar', (req, res) => {
    Walker.find()
    .then(walkers => res.render('myPages/listWalkers', {
        walkers: walkers.map(walker => walker.toJSON()),
        style: "listWalkers.css"
    }))
})



module.exports = router