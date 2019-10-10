
exports.seed = function(knex) {
      return knex('join').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 12},
        {recipe_id: 1, ingredient_id: 2, ingredient_quantity: 34},
        {recipe_id: 3, ingredient_id: 3, ingredient_quantity: 56}
      ]);
};
