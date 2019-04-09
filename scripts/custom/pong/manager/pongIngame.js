'use strict';

class PongIngame extends InGame {
    constructor(context) {
        super(context);

        // Create player
        let shovelPlayer = new Shovel(context, 1, 1, 'red', 50, 300, 25, 50, 15);

        // Create enemy
        let shovelEnemy = new AutomaticShovel(context, 1, 'yellow', CONFIG.SCREEN_WIDTH - 50, 50, 25, 50, 15);

        this.setPlayer1(shovelPlayer);
        this.addActor(shovelEnemy, true);

        let scenarioDefinitionData = {
            background: {
                color: '#000000',
                layer: 0
            }
        };

        // Creamos la definición del escenario
        let scenarioDefinition = new SimpleScenarioDefinition(scenarioDefinitionData, CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT);

        let renderingView = new RenderingView(this, scenarioDefinition, shovelPlayer, 0, 0,
            CONFIG.SCREEN_WIDTH, CONFIG.SCREEN_HEIGHT, [shovelPlayer]);

        this._renderingViewId = this.addRenderingView(renderingView);

        // Marcamos para dibujar los límites
        renderingView._drawLimits = true;

        this.setScenarioDefinition(scenarioDefinition);
    }

    act() {
        super.act();
    }

    draw() {
        super.draw();
    }
}
