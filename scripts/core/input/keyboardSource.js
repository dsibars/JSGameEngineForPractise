
import keypress from '../lib/keypress.js';
import { CONFIG } from '../configuration.js';
import { LOGGER } from '../logger.js';
import { CONS } from '../constants.js';
import InputSource from './inputSource.js';
'use strict';

export default class KeyboardSource extends InputSource {
    constructor(manager) {
        super(manager);
        this._listener = new keypress.Listener();
    }

    init() {
        for (let key in CONFIG.INPUT_KEYBOARD_MAPPING) {
            LOGGER.debug("mapping key " + key + " to " + CONFIG.INPUT_KEYBOARD_MAPPING[key]);
            this._listener.register_combo({
                "keys": CONFIG.INPUT_KEYBOARD_MAPPING[key],
                "on_keydown": () => {
                    this.getInputManager().inputOn(CONS.input[key], 1);
                },
                "on_keyup": () => {
                    this.getInputManager().inputOff(CONS.input[key])
                },
                prevent_repeat: true
            });
        }
    }

    getType() {
        return CONS.inputType.KEYBOARD;
    }
}
