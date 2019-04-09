'use strict';

class Ball extends Player {
    constructor(context, nlayer, color, x, y, width, height, speed) {
        super(context, nlayer, -1, x, y, width, height, true, false, speed);

        this._color = color ? color : 'white';

    }

    moveX(increment) {
        // Do nothing, as a Shovel will not move at X axis
    }

    draw(ctx, x, y, w, h, drawLimits) {
        ctx = ctx ? ctx : this._layer;
        ctx.fillStyle = this._color;
        ctx.fillRect(x, y, this._w, this._h);
    }
}
