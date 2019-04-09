'use strict';

class AutomaticShovel extends Shovel {
    constructor(context, nlayer, color, x, y, width, height, speed) {
        super(context, nlayer, -1, color, x, y, width, height, speed);
    }


    isLeftInputActive() {
        return false;
    }

    isRightInputActive() {
        return false;
    }

    isUpInputActive() {
        return false;
    }

    isDownInputActive() {
        return false;
    }
}
