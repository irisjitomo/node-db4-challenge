const db = require('../db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes')
    .select('recipes.name as recipe name', '*')
}

function getShoppingList(id) {
    return db('recipes as r')
    .join ('join as j', 'j.recipe_id', '=', 'r.id')
    .join ('ingredients as i', 'i.id', '=', 'j.ingredient_id')
    .select ('r.name as recipe name', 'i.name as ingredient', 'j.ingredient_quantity as ingredient quantity')
    .where('r.id', id)
}

function getInstructions(id){
    return db('recipes as r')
    .join('instructions as ins', 'ins.recipe_id', '=', 'r.id')
    .select('r.name as recipe name', 'ins.step_number as step number', 'ins.instruction as instruction')
    .where('r.id', id)
}
