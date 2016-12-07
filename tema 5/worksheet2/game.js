class Bola{
    constructor(svg,positionx,positiony,width,height,juego){
        this.svg = svg;
        this.juego = juego;
        this.width = width;
        this.height = height;
        this.create(svg,positionx,positiony);
        this.velx = -3;
        this.vely = -3;
        var that = this;
        this.interval = setInterval(function(){that.move()},1000/60);
    }
    create(svg,positionx,positiony){
        this.ball = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.ball.setAttribute("cx",positionx);
        this.ball.setAttribute("cy",positiony);
        this.ball.setAttribute("r","5");
        this.ball.setAttribute("fill","green");
        svg.appendChild(this.ball);
    }

    move(){
        var move = (position,velocity) => position+velocity;
        var px = this.position[0];
        var py = this.position[1];
        this.ball.setAttribute("cx",move(px,this.velx));
        this.ball.setAttribute("cy",move(py,this.vely));
        this.juego.colision();
        this.shockWall();
    }

    shockWall(){
        if(this.position[0]<=0 || this.position[0]>=this.width){
            this.velx = this.velx * -1;
        }
        if(this.position[1]<=0 || this.position[1]>=this.height){
            this.vely = this.vely * -1;
        }
        /*if( this.position[1]>=this.height){
            this.ball.destroy();
            this.juego.createBall();
        }*/
    }
    shockBrick(){
        this.vely = this.vely * -1;
    }

    destroy(){
        this.svg.removeChild(this);
    }

    get position(){
        return [parseInt(this.ball.getAttribute("cx")),parseInt(this.ball.getAttribute("cy"))];
    }
}

class Ladrillo{
    constructor(svg,positionx,positiony,width,height,juego){
        this.juego = juego;
        this.svg = svg;
        this.create(svg,positionx,positiony,width,height);
    }

    create(svg,positionx,positiony,width,height){
        this.brick = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.brick.setAttribute("x",positionx);
        this.brick.setAttribute("y",positiony);
        this.brick.setAttribute("width",width);
        this.brick.setAttribute("height",height);
        this.brick.setAttribute("fill","red");
        svg.appendChild(this.brick);
    }
    colision(ball,index) {
        if (ball.position[1] >= this.position[1] && ball.position[1] <= (this.position[1] + this.height)) {
            if (ball.position[0] >= this.position[0] && ball.position[0] <= (this.position[0] + this.width)) {
                if(this.brick) {
                    this.destroy(this.brick);
                    ball.shockBrick();
                    this.juego.deleteBrick(index)
                }
            }
        }

    }

    destroy(that){
        this.svg.removeChild(that);
    }

    get position(){
        return [parseInt(this.brick.getAttribute("x")),parseInt(this.brick.getAttribute("y"))];
    }
    get width(){
        return parseInt(this.brick.getAttribute("width"));
    }
    get height(){
        return parseInt(this.brick.getAttribute("height"));
    }
}

class Player{
    constructor(svg){
        this.create(svg,450,470,100,10);
        this.vel = 15;
        this.addEvent();
        var that = this;
    }

    create(svg,positionx,positiony,width,height) {
        this.player = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.player.setAttribute("x", positionx);
        this.player.setAttribute("y", positiony);
        this.player.setAttribute("width", width);
        this.player.setAttribute("height", height);
        this.player.setAttribute("fill", "black");
        svg.appendChild(this.player);
    }
    colision(ball){
        if (ball.position[1] >= this.position[1] && ball.position[1] <= (this.position[1] + this.height)) {
            if (ball.position[0] >= this.position[0] && ball.position[0] <= (this.position[0] + this.width)) {
                ball.shockBrick();
            }
        }
    }
    get position(){
        return [parseInt(this.player.getAttribute("x")),parseInt(this.player.getAttribute("y"))];
    }
    get width(){
        return parseInt(this.player.getAttribute("width"));
    }
    get height(){
        return parseInt(this.player.getAttribute("height"));
    }

    addEvent(){
        window.addEventListener("keydown",(e)=>this.move(e),false);
    }
    move(e){
        if(e.keyCode == 39 && this.position[0]<=890) {
            var move = (position, velocity) => position + velocity;
            var px = parseInt(this.player.getAttribute("x"));
            this.player.setAttribute("x", move(px, this.vel));
        }
        if(e.keyCode == 37 && this.position[0]>=1) {
            var move = (position, velocity) => position - velocity;
            var px = parseInt(this.player.getAttribute("x"));
            this.player.setAttribute("x",move(px,this.vel));
        }
    }
}

class Game{
    constructor(){
        this.contadorBall = 3;
        this.createLevel();
        this.createBrick();
        this.createBall();
        this.createPlayer();
        var that = this;
        this.interval = setInterval(function(){that.win()},1000/60);
    }
    createLevel(){
        var body = document.getElementById("body");
        body.style.backgroundColor = "red";
        this.svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        this.svg.style.backgroundColor = "white";
        this.svg.setAttribute("width","1000");
        this.svg.setAttribute("height","500");
        body.appendChild(this.svg);
    }

    createBrick(){
        this.bricks = [];
        var posy = 60;
        for (var i=0;i<5;i++){
            var posx = 40;
            for(var j=0;j<15;j++) {
                this.bricks.push(new Ladrillo(this.svg, posx, posy, 40, 10,this));
                posx += 60;
            }
            posy += 20
        }
    }
    colision(){
        var that = this;
        this.bricks.forEach(function (valor,index){
            valor.colision(that.ball,index)
        });
        this.player.colision(this.ball);
        this.win();
    }
    deleteBrick(index){
        delete this.bricks[index];
    }

    createBall(){
            this.ball = new Bola(this.svg, 475, 440, 1000, 500, this);
    }

    lose(){
        this.contadorBall--;
        if(!this.contadorBall){
            alert("Has perdido");
            clearInterval(this.ball.interval);
            clearInterval(this.interval);
        }
    }

    createPlayer(){
        this.player = new Player(this.svg);
    }

    win(){
        if(this.bricks.length==0){
            clearInterval(this.ball.interval);
            clearInterval(this.interval);
            alert("has ganado");

        }
    }


}

window.onload = function(){
    var game = new Game();
}