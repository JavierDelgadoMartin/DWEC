class Bola{
    constructor(svg,positionx,positiony){
        this.ball = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.ball.setAttribute("cx",positionx);
        this.ball.setAttribute("cy",positiony);
        this.ball.setAttribute("r","5");
        this.ball.setAttribute("fill","black");
        svg.appendChild(this.ball)
    }

    movimiento(velocity){
        var move = (position,velocity) => position+velocity;
        var px = this.cx;
        var py = this.cy;
        this.ball.setAttribute("cx",move(px,velx));
        this.ball.setAttribute("cy",move(py,vely));
    }

    colision(){

    }

    destroy(){

    }

    get position(){
        return [parseInt(this.ball.getAttribute("cx")),parseInt(this.ball.getAttribute("cy"))];
    }
}

class Ladrillo{
    constructor(svg,positionx,positiony,width,height){
        this.brick = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.brick.setAttribute("x",positionx);
        this.brick.setAttribute("y",positiony);
        this.brick.setAttribute("width",width);
        this.brick.setAttribute("height",height);
        this.brick.setAttribute("fill","black");
        svg.appendChild(this.brick);
    }
    colision(){

    }

    destroy(){

    }

    get position(){
        return [parseInt(this.brick.getAttribute("cx")),parseInt(this.brick.getAttribute("cy"))];
    }
}

class Player{
    constructor(){

    }
    colision(){

    }

    moveLeft(){

    }

    moveRight(){

    }
}

class Game{
    constructor(){
        this.contadorBall = 3;
        var body = document.getElementById("body");
        body.style.backgroundColor = "black";
        this.svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        this.svg.style.backgroundColor = "white";
        this.svg.setAttribute("width","1000");
        this.svg.setAttribute("height","500");
        body.appendChild(this.svg);
    }

    createBrick(){
        var posy = 60;
        for (var i=0;i<5;i++){
            var posx = 40;
            for(var j=0;j<15;j++) {
                new Ladrillo(this.svg, posx, posy, 40, 10);
                posx += 60;
            }
            posy += 20
        }
    }

    createBall(){

    }

    comprobarGanar(){

    }

}

window.onload = function(){
    var game = new Game();
    game.createBrick();
}