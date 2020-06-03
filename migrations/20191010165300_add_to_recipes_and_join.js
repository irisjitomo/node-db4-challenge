exports.up = function(knex) {
	return knex.schema
		.table('recipes', (table) => {
			table.text('instructions');
		})
		.table('join', (table) => {
			table.integer('ingredient_quantity');
		});
};

exports.down = function(knex) {
	return knex.schema
		.table('recipes', (table) => {
			table.dropColumn('instructions');
		})
		.table('join', (table) => {
			table.dropColumn('ingredient_quantity');
		});
};
