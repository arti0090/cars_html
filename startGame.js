var myGamePiece;
var myObstacles = [];
var myScore;
var myGameArea;

function startGame() {
    
    myGamePiece = new Rectangle(30,30,"blue",300,600);    //player
    myScore = new Rectangle("30px", "Consolas", "black", 400, 40, "text");
    myGameArea.start();
}
myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 600;
        this.canvas.height = 800;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 30);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

    function everyInterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}