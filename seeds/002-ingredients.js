
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'sugar'},
        {name: 'spice'},
        {name: 'everything-nice'}
      ]);
};
