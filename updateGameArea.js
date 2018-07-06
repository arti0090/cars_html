var myGamePiece;
var myObstacles = [];

function updateGameArea() {


    var x, y;

    for (i = 0; i < myObstacles.length; i++) {

        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();


    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;

    myGameArea.frameNo += 1;


    if (myGameArea.frameNo === 1  || everyInterval(150)) {
        x = myGameArea.canvas.width -600;
        y = myGameArea.canvas.height + 100;
        myObstacles.push(new Rectangle(10,200,"red",20,-10));
        myObstacles.push(new Rectangle(10,200,"red",580,-10));
    }





    for(i = 0; i<myObstacles.length; i++) {
            myObstacles[i].y += 1;
            myObstacles[i].update();
        }

    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 5; }

    myGamePiece.newPos();
    myGamePiece.update();


}