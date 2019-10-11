
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: 1, 
          step_number: '1', 
          instruction: 'Turn several no-fruits into apples by pulling off a leaf and hitting the fruit at the appropriate time.'
        },

        {
          recipe_id: 1, 
          step_number: '2', 
          instruction: 'Remove explosive stink-sack from a twelve-legged cave frog, then place the frog meat (sans stink-sack) into the chipper-chopper. In the case where Mung and Chowder cooked it, Chowder accidentally placed the meat into the chipper-chopper early without removing the sack but was able to shut the machine off before the sack could explode. However, he then licked it and released terrible smelling gases.'
        },

        {recipe_id: 3, step_number: '1', instruction: 'Get ice'}
      ]);
};
