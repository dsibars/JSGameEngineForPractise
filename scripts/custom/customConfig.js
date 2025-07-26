import { CONFIG } from '../core/configuration.js';
import { LOGGER } from '../core/logger.js';
import { CONS } from '../core/constants.js';

CONFIG.SCREEN_WIDTH = 1000;
CONFIG.SCREEN_HEIGHT = 700;

LOGGER.setLevel(CONS.logLevel.DEBUG);