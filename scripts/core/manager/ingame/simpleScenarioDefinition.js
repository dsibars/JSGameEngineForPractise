'use strict';

class SimpleScenarioDefinition {
    constructor(definition, width, height, isDynamic) {
        this._def = definition;
        this.width = width;
        this.height = height;
        this._layerImages = [];

        if (isDynamic) {
            this._dynamic = true;
        } else {
            this._dynamic = false;
        }

        this._bkgImage = false;

        if (definition.background.image) {
            this._bkgImageTmp = new Image();
            this._bkgImageTmp.onload = () => {
                this._bkgImage = this._bkgImageTmp;
                this._bkgImageTmp = false;
                this._refreshScenarioBackground();
            };
            this._bkgImageTmp.src = definition.background.image;
        }

        this._inited = false;

    }

    act() {
        if (!this._inited) {
            this._generateScenarioImages();
            this._inited = true;
        }

        if (this._dynamic) {
            this._generateScenarioImages();
        }
    }

    getLayerImages() {
        return this._layerImages;
    }

    getBackgroundCanvas() {
        return this._layerImages[this._def.background.layer || 0];
    }

    getDefinition() {
        return this._def;
    }

    getBackgroundImage() {
        return this._bkgImage;
    }

    _generateScenarioImages() {
        if (this._def.background) {
            this._refreshScenarioBackground();
        }
    }

    _refreshScenarioBackground() {
        if (!this._layerImages) return;

        let canvas = this._layerImages[this._def.background.layer || 0];

        if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            this._layerImages[this._def.background.layer || 0] = canvas;
        }

        let ctx = canvas.getContext('2d');

        if (this._bkgImage) {

            let drawedY = 0;

            while (drawedY < this.height) {
                let drawedX = 0;

                while (drawedX < this.width) {
                    ctx.drawImage(this._bkgImage, drawedX, drawedY);

                    drawedX += this._bkgImage.width;
                }

                drawedY += this._bkgImage.height;
            }
        } else if (this._def.background.color) {
            ctx.fillStyle = this._def.background.color;

            ctx.fillRect(0, 0, this.width, this.height);
        }
    }
}
