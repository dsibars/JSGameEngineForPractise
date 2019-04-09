'use strict';

class RenderingView {
    constructor(statusManager, scenarioDefinition, actor, x, y, width, height, drawableActors) {
        this._manager = statusManager;
        this._scenario = scenarioDefinition;
        this._actor = actor;
        this._drawableActors = drawableActors ? drawableActors : Array();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._widthH = width / 2;
        this._heightH = height / 2;

        this._renderingLimits = {
            x: this._x,
            y: this._y,
            w: this._width,
            h: this._height,
            xf: this._x + this._width,
            yf: this._y + this._height
        };

        if (this._scenario.cellwidth) {
            this._numCellXDraws = Math.ceil(this._width / this._scenario.cellwidth) + 1;
            this._numCellYDraws = Math.ceil(this._height / this._scenario.cellheight) + 1;
            this._numCellXDrawsH = Math.ceil(this._width / this._scenario.cellwidth / 2);
            this._numCellYDrawsH = Math.ceil(this._width / this._scenario.cellwidth / 2);
        }


        this._drawLimits = false;
    }

    addDrawableActor(actor) {
        this._drawableActors.push(actor);
    }

    removeDrawableActor(actor) {
        let index = this._drawableActors.indexOf(actor);

        if (index >= 0) {
            this._drawableActors.splice(index, 1);
        }
    }

    draw() {
        //TODO de momento Borramos todo, mas adelante se debera tener en cuenta qué capas
        this._manager.getGameContext().clearAllLayers(this._x, this._y, this._width, this._height);
        // guardamos la posición del actor en el escenario lógico (no el de pintado)
        let actorPosition = this._actor.getPosition();
        // Calculamos el area del mapa a dibujar
        let scenarioDrawArea = {
            x: actorPosition.x - this._widthH,
            y: actorPosition.y - this._heightH,
            xf: actorPosition.x + this._widthH,
            yf: actorPosition.y + this._heightH,
            w: this._width,
            h: this._height
        };

        // calculamos la posición donde dibujar al actor
        let actorDrawPosx = this._x + this._widthH;
        let actorDrawPosy = this._y + this._heightH;

        // Si hemos llegado a los bordes del escenario, ajustar posiciones del actor y poner el area del mapa a dibujar al borde
        if (scenarioDrawArea.xf > this._scenario.width) {
            let diff = scenarioDrawArea.xf - this._scenario.width;
            scenarioDrawArea.xf = this._scenario.width;
            scenarioDrawArea.x = this._scenario.width - this._width;
            actorDrawPosx += diff;
        } else if (scenarioDrawArea.x < 0) {
            let diff = scenarioDrawArea.x * -1;
            scenarioDrawArea.x = 0;
            scenarioDrawArea.xf = this._width;
            actorDrawPosx -= diff;
        }
        if (scenarioDrawArea.yf > this._scenario.height) {
            let diff = scenarioDrawArea.yf - this._scenario.height;
            scenarioDrawArea.yf = this._scenario.height;
            scenarioDrawArea.y = this._scenario.height - this._height;
            actorDrawPosy += diff;
        } else if (scenarioDrawArea.y < 0) {
            let diff = scenarioDrawArea.y * -1;
            scenarioDrawArea.y = 0;
            scenarioDrawArea.yf = this._height;
            actorDrawPosy -= diff;
        }

        scenarioDrawArea = this.editScenarioDrawArea(scenarioDrawArea);
        actorDrawPosx = this.editActorDrawPositionX(actorDrawPosx);
        actorDrawPosy = this.editActorDrawPositionY(actorDrawPosy);

        // Dibujamos las capas del escenario
        let layerImages = this._scenario.getLayerImages();
        for (let i = 0; i < this._manager.getGameContext().getLayerCount(); i++) {

            if (layerImages[i]) {
                this._manager.getGameContext().getLayer(i).drawImage(layerImages[i], scenarioDrawArea.x, scenarioDrawArea.y,
                    scenarioDrawArea.w, scenarioDrawArea.h,
                    this._x, this._y, this._width, this._height);
            }
        }

        // Dibujamos los actores visibles
        if (this._drawableActors) {
            for (let i = 0; i < this._drawableActors.length; i++) {
                let currentActor = this._drawableActors[i];
                if (Utils.hasCollission(currentActor.getBounds(), scenarioDrawArea)) {

                    let cActorPosition = currentActor.getPosition();

                    let nActorX = actorDrawPosx + cActorPosition.x - actorPosition.x;
                    let nActorY = actorDrawPosy + cActorPosition.y - actorPosition.y;
                    currentActor.draw(false,
                        nActorX,
                        nActorY,
                        false, false, this._renderingLimits);
                }
            }
        }

        if (this._drawLimits) {
            let ctx = this._manager._ctx._layers[this._manager._ctx._layers.length - 1];
            ctx.beginPath();
            ctx.strokeStyle = "rgb(255, 0, 0)";
            ctx.lineWidth = 2;
            ctx.rect(this._x, this._y, this._width, this._height);
            ctx.stroke();
        }

        if (this.onPostDraw) {
            this.onPostDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea);
        }
    }

    _drawBackground(scenarioDrawArea) {
        let bkgImageCanvas = this._scenario.getBackgroundCanvas();

        if (bkgImageCanvas) {
            let ctxBkg = this._manager.getGameContext().getLayer(this._scenario.getDefinition().background.layer);

            ctxBkg.drawImage(bkgImageCanvas, scenarioDrawArea.x, scenarioDrawArea.y, scenarioDrawArea.w, scenarioDrawArea.h,
                this._x, this._y, this._width, this._height);
        }
    }

    /**
     * Método que se invoca antes de hacer el dibujado estandar del rendering view
     * @param actorDrawPosx posición x del actor en el renderingView
     * @param actorDrawPosy posición y del actor en el renderingView
     * @param scenarioDrawArea area del escenario que va a ser dibujada (x, y, w, h, xf, yf)
     */
    onPreDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea) {
        //TODO sobreescribir
    }

    /**
     * Método que se invoca después de hacer el dibujado estandar del rendering view
     * @param actorDrawPosx posición x del actor en el renderingView
     * @param actorDrawPosy posición y del actor en el renderingView
     * @param scenarioDrawArea area del escenario que va a ser dibujada (x, y, w, h, xf, yf)
     */
    onPostDraw(actorDrawPosx, actorDrawPosy, scenarioDrawArea) {
        //TODO sobreescribir
    }

    editScenarioDrawArea(scenarioDrawArea) {
        return scenarioDrawArea;
    }

    editActorDrawPositionX(actorDrawX) {
        return actorDrawX;
    }

    editActorDrawPositionY(actorDrawY) {
        return actorDrawY;
    }
}
