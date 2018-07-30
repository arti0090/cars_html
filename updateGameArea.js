var myGamePiece;
var myObstacles = [];
var myEnemies = [];


function updateGameArea() {


    var x, y;
    var  sideWall1 = new Rectangle(10,myGameArea.canvas.height,"red",10,0);
    var  sideWall2 = new Rectangle(10,myGameArea.canvas.height,"red",myGameArea.canvas.width-20,0);
    var EnemyCar = new Rectangle(30, 50, "orange", 200, -50);
    var EnemyTruck = new Rectangle(50,70,"orange", 500, -50);

    for (i = 0; i < myEnemies.length; i++) {
        if (myGamePiece.crashWith(myEnemies[i])) {
            myGameArea.stop();
            return;
        }

    }


    for (i = 0; i < myObstacles.length; i++) {

        if (myGamePiece.crashWith(myObstacles[i]) ) {
            myGameArea.stop();
            return;
        }

    }
    myGameArea.clear();


    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;

    myGameArea.frameNo += 1;
    myObstacles.push(sideWall1);
    myObstacles.push(sideWall2);

    if (myGameArea.frameNo === 1  || everyInterval(150)) {
        x = myGameArea.canvas.width -600;
        y = myGameArea.canvas.height + 100;

        myObstacles.push(new Rectangle(10,200,"red",10,-150));
        myObstacles.push(new Rectangle(10,200,"red",580,-150));
        myEnemies.push(new Rectangle(30,30,"purple",40,-150));
        myEnemies.push(EnemyCar);
        myEnemies.push(EnemyTruck);
    }


    for(i = 0; i<myEnemies.length; i++) {
        myEnemies[i].y += 2;
        myEnemies[i].update();
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