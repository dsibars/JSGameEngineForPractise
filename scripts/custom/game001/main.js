
import Game from '../../core/game.js';
import Menu from './gameMenu.js';
import GameSM from './gameSM.js';
import { CONFIG } from '../../core/configuration.js';
import { CONS } from '../../core/constants.js';
import { mainMenuConfig } from './gameMenu.js';
import { SC_TEST001 } from '../scenario/testScenario001.js';
import { SC_TEST002 as LEVEL2 } from '../scenario/testScenario002.js';
import { SC_TEST003 as LEVEL3 } from '../scenario/testScenario003.js';
import { SC_TEST004 as LEVEL4 } from '../scenario/testScenario004.js';
import { SC_TEST005 as LEVEL5 } from '../scenario/testScenario005.js';
import { SC_TESTMULTIPLAYER } from '../scenario/testScenarioMultiplayer.js';
import '../customConstants.js';
import '../customConfig.js';
'use strict';

//CONFIGURAMOS TAMAÑO DEL CANVAS
CONFIG.SCREEN_WIDTH = 1000;
CONFIG.SCREEN_HEIGHT = 600;

// Definición de escenario a probar
const SCENDEF = SC_TEST001;
const SCENMULTIPLAYER = SC_TESTMULTIPLAYER;

// Variables propias para el ejemplo
// mostrar como multiplayer
//var USE_MULTIPLAYER = false;
// Si se usa multiplater, si esta se parte verticalmente
//var MULTIPLAYER_VERTICAL = false;
// Si no se usa multiplayer, margen para el area del juego
//var SINGLEPLAYER_MARGIN = 0;


function initPage() {
    // Creamos el juego con 5 capas
    var myGame = new Game(5);
    // Creamos el menu principal
    myGame.registerManagerForStatus(CONS.status.MENU, new Menu(myGame, mainMenuConfig));

    // Agregamos el juego que es singleplayer
    myGame.registerManagerForStatus(CONS.status.GAME_SINGLE, new GameSM(myGame, false, false, 0, 2));
    myGame.registerManagerForStatus(CONS.status.GAME_MULTI, new GameSM(myGame, true, true, 0, 2));
    // Establecemos el status inicial como Ejecutando el juego
    myGame.setCurrentStatus(CONS.status.MENU);
    myGame.showFPS(true);

    myGame.start();
}

window.onload = initPage;
