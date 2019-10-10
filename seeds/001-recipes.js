
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Froggy Apple Crumpie Thumpkin', instructions: 'dont mess up please'},
        {name: 'Roast Most', instructions: 'dont do it'},
        {name: 'Thrice Cream', instructions: 'please work'}
      ]);
};
