'use strict';

//CONFIGURAMOS TAMAÑO DEL CANVAS
CONFIG.SCREEN_WIDTH = 1000;
CONFIG.SCREEN_HEIGHT = 600;


function initPage() {
    // Creamos el juego con 5 capas
    var myGame = new Game(5);
    // Creamos el menu principal
    myGame.registerManagerForStatus(CONS.status.RUNNING, new PongIngame(myGame));

    myGame.setCurrentStatus(CONS.status.RUNNING);
    myGame.showFPS(true);

    myGame.start();
}

window.onload = initPage;
