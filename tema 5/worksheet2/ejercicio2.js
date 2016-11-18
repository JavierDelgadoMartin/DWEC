/**
 * Created by javi on 17/11/2016.
 */

class Game{
    constructor(){
        this.velx = 2;
        this.vely = 5;
        var body = document.getElementById("body");
        this.svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        this.svg.setAttribute("width","200");
        this.svg.setAttribute("height","200");
        body.appendChild(this.svg);

        var velocity = Math.floor(Math.random()*10);
        this.circle = new Ball(this.svg);
        this.playMove();
    }
    playMove(){
        var that = this;
        setInterval(function(){that.detectShock()},1000/25);
    }
    detectShock(){
        if(this.circle.cx>=this.width){
            this.velx = -(this.velx);
        }
        if (this.circle.cx < 0){
            this.velx = this.velx * -1;
        }

        if(this.circle.cy >= this.height){
            this.vely = -(this.vely);
        }

        if(this.circle.cy <0 ){
            this.vely = this.vely * -1;
        }

        this.circle.moveBall(this.velx,this.vely);
    }
    get width(){
        return parseInt(this.svg.getAttribute("width"));
    }

    get height(){
        return parseInt(this.svg.getAttribute("height"));
    }
}

class Ball{
    constructor(svg){
        this.ball = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.ball.setAttribute("cx","100");
        this.ball.setAttribute("cy","100");
        this.ball.setAttribute("r","5");
        this.ball.setAttribute("fill","black");
        svg.appendChild(this.ball);
    }

    moveBall(velx,vely){
        var move = (position,velocity) => position+velocity;
        var px = this.cx;
        var py = this.cy;
        this.ball.setAttribute("cx",move(px,velx));
        this.ball.setAttribute("cy",move(py,vely));
    }
    get cx(){
        return parseInt(this.ball.getAttribute("cx"));
    }
    get cy(){
        return parseInt(this.ball.getAttribute("cy"));
    }
}

window.onload = function(){
    new Game();
}