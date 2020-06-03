const express = require('express')

// const db = require('../db-config')
const Recipes = require('./recipe-schemes')

const router = express.Router();

router.get('/recipe', (req, res) => {
    Recipes
    .getRecipes()
    .then(rec => {
        res.json(rec)
    })
})
 router.get('/recipe/:id', (req, res) => {
     Recipes
     .getShoppingList(req.params.id)
     .then(rec => {
         res.json(rec)
     })
 })

 router.get('/recipe/:id/steps', (req, res) => {
     Recipes
     .getInstructions(req.params.id)
     .then(rec => {
         res.json(rec)
     })
 })

module.exports = router;