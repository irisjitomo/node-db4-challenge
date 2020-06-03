
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
    table
    .increments();
    
    table
    .string('name', 255)
    .notNullable();
  })

  .createTable('ingredients', table => {
    table
    .increments();
    
    table
    .string('name', 255)
    .notNullable();
  })

  .createTable('join', table => {
      table
      .increments();

      table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      table.unique(['recipe_id', 'ingredient_id'])
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('join')
  .dropTableIfExists('ingredients') 
  .dropTableIfExists('recipes')
};
