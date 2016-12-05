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
        svg.appendChild(this.brick);
    }
    get position(){
        return [parseInt(this.brick.getAttribute("cx")),parseInt(this.brick.getAttribute("cy"))];
    }
}

class Player{
    constructor(){

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
        this.svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        this.svg.setAttribute("width","200");
        this.svg.setAttribute("height","200");
        body.appendChild(this.svg);
    }

    createBrick(){

    }

    destroyBrick(){

    }

    createBall(){

    }

    comprobarColision (){

    }

    comprobarGanar(){

    }

}