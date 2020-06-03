
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: 1, 
          step_number: 1, 
          instruction: 'Turn several no-fruits into apples by pulling off a leaf and hitting the fruit at the appropriate time.'
        },

        {
          recipe_id: 1, 
          step_number: 2, 
          instruction: 'Remove explosive stink-sack from a twelve-legged cave frog, then place the frog meat (sans stink-sack) into the chipper-chopper. In the case where Mung and Chowder cooked it, Chowder accidentally placed the meat into the chipper-chopper early without removing the sack but was able to shut the machine off before the sack could explode. However, he then licked it and released terrible smelling gases.'
        },

        {
          recipe_id: 1,
          step_number: 8,
          instruction: 'Add a certain juice. Mung Daal and Chowder did this by rolling a barrel of the juice down a ramp to collide with Shnitzel, who was wearing a harness with a pushpin attached, on a trapeze. The pushpin impaled the barrel, allowing the juice to pour out.'
        },

        {
          recipe_id: 1,
          step_number: 23,
          instruction: 'Shnitzel is seen opening a cupboard with sugar and Maple Bear Extract. He is attacked, once again, by the creature that was accidentally produced while turning the no-fruits into apples.'
        },

        {
          recipe_id: 1,
          step_number: 46,
          instruction: 'Shnitzel is jumping up and down to power a brick oven, presumably to cook a part of the recipe.'
        },

        {
          recipe_id: 1,
          step_number: 52,
          instruction: 'Mung, Chowder, and Shnitzel are sipping juice boxes, until Mung chokes and begins coughing. Besides possibly being a taste test, they could also have been waiting for the recipe to cook.'
        },

        {
          recipe_id: 1,
          step_number: 68,
          instruction: "The dish has to be beaten at thumb wrestling. It turns into a giant hand on this step and the dish cannot be ready to serve unless it's beaten. Chowder was able to beat it by biting its thumb off."
        },

        {recipe_id: 3, step_number: '1', instruction: 'Get ice'}
      ]);
};
