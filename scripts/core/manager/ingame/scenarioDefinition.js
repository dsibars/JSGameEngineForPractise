'use strict';

class ScenarioDefinition extends SimpleScenarioDefinition {
    constructor(definition, cellwidth, cellheight, isDynamic) {
        super(definition, definition.scenarioDefinition[0].length * cellwidth, definition.scenarioDefinition.length * cellheight, isDynamic);

        this.cellwidth = cellwidth;
        this.cellheight = cellheight;
        this.numCellsX = definition.scenarioDefinition[0].length;
        this.numCellsY = definition.scenarioDefinition.length;

        this._cellDefs = new Map();
        for (let key in this._def.cellDefinitions) {
            if (this._def.cellDefinitions.hasOwnProperty(key)) {
                this._cellDefs.set(key, this._def.cellDefinitions[key]);
            }
        }

        this._elements = new Map();

        for (let y = 0; y < this.numCellsY; y++) {
            for (let x = 0; x < this.numCellsX; x++) {

                let scenarioCellType = this._def.scenarioDefinition[y][x];

                if (scenarioCellType !== ' ') {
                    let cellContent = this._cellDefs.get(scenarioCellType);

                    let elm = {
                        type: scenarioCellType,
                        x: x,
                        y: y,
                        numFrame: 0,
                        bounds: {
                            x: x * this.cellwidth,
                            y: y * this.cellheight,
                            w: this.cellwidth,
                            h: this.cellheight
                        }
                    };

                    elm = Utils.mergeObjects([cellContent, elm]);

                    this._elements.set(x + '-' + y, elm);
                }
            }
        }
    }

    _isCellContentEmpty(cellContent) {
        return cellContent === '' || cellContent === '$';
    }

    isCellEmpty(x, y) {
        return this._elements.has(x + '-' + y);
    }

    /**
     * Recupera la información de una celda
     * @params x celda x
     * @params y celda y
     * @return información de la celda. Contiene las siguientes propiedades:
     *     - type: tipo de celda
     *     - x: celda x
     *     - y: celda y
     *     - numFrame: número del frame actual de la animación de la celda
     *     - bounds: posición de la celda en el escenario (x, y, w, h)
     *     - El resto de propiedades heredadas de la definición de la celda (propiedades de cellDefinitions)
     */
    getCellData(x, y) {
        let cellContent = this._elements.get(x + '-' + y);

        if (cellContent === undefined) return false;

        return cellContent;
    }

    /**
     * Recupera un listado de celdas ubicadas en el area especificada
     * @param bounds area especificada (objeto con propiedades x, y, width, height)
     * @return listado de datos de celdas ubicadas en esa area (@see retorno de getCellData)
     */
    getCellsDataByBounds(bounds) {
        //TODO este método se puede optimizar fijando un rango de celdas x e y que estén en los bounds especificados.
        //TODO de esta forma, solo se comprobarán los elementos que estén en esas celdas.
        //TODO de momento, recorro todos los elementos validando si están colisionando

        let cells = Array();

        let cellElementsIt = this._elements.values();

        let cellElementsNext = cellElementsIt.next();

        while (!cellElementsNext.done) {
            let cell = cellElementsNext.value;

            if (Utils.hasCollission(bounds, cell.bounds)) {
                cells.push(cell);
            }

            cellElementsNext = cellElementsIt.next();
        }

        return cells;
    }

    _generateScenarioImages() {
        if (this._def.background) {
            this._refreshScenarioBackground();
        }

        let elementCellIt = this._elements.values();

        let elementCellNext = elementCellIt.next();

        while (!elementCellNext.done) {
            let cellData = elementCellNext.value;

            let actionData = cellData.sprite.getActionData(cellData.action);
            //TODO de momento, no hay animación para los sprites de las celdas.
            let curFrame = 0;

            let frameData = actionData.getFrameData(curFrame);

            let canvas = this._layerImages[cellData.layer ? cellData.layer : 0];

            if (!canvas) {
                canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;

                this._layerImages[cellData.layer ? cellData.layer : 0] = canvas;
            }

            let ctx = canvas.getContext('2d');

            ctx.drawImage(cellData.sprite._img, 0, 0, cellData.sprite._spriteWidth, cellData.sprite._spriteHeight,
                cellData.bounds.x, cellData.bounds.y, cellData.bounds.w, cellData.bounds.h);

            elementCellNext = elementCellIt.next();
        }
    }
}
