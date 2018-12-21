var SC_TESTMULTIPLAYER = {


    background: {
        color: '#000000',
        image: 'img/grass001.jpg',
        //image: 'img/ground001.jpg',
        layer: 0
    },


    cellDefinitions: {
        'R': {
            description: 'rock',
            solid: true,
            sprite: SPRITES[CONS.sprites.TERRAIN_001],
            action: CONS.spriteAction.ROCK_001,
            layer: 2
        }

    },

    enemyFreeCells: [
        [12, 3],
        [20, 8]
    ],

    scenarioDefinition: [
        ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R'],
        ['R', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R', 'R', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R'],
        ['R', ' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', ' ', ' ', 'R', ' ', 'R', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', 'R', 'R', ' ', ' ', 'R', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', ' ', ' ', 'R', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', 'R', 'R', ' ', ' ', ' ', 'R', 'R', 'R', ' ', ' ', 'R', ' ', ' ', 'R', 'R', ' ', 'R', ' ', 'R', ' ', 'R', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', 'R', 'R', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' ', ' ', 'R', ' ', 'R'],
        ['R', ' ', ' ', 'R', 'R', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R'],
        ['R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'R'],
        ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R']
    ]
};