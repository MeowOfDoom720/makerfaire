/* global width, height */

let trig = Math.PI/180;  //a trig multiplier for degrees to radians, which is what the js math library uses

let drawRocket = (x, y, theta) => {
    rotate(theta);
    line(x-4, y, x+4, y);
    line(x-4, y, x-2, y-3);
    line(x+4, y, x+2, y-3);
    line(x-2, y, x-2, y-15);
    line(x+2, y, x+2, y-15);
    line(x-2, y-15, x, y-19);
    line(x+2, y-15, x, y-19);
    line(x, y-5, x + (Math.random()-0.5) * 4, y+4);
    line(x, y-5, x + (Math.random()-0.5) * 4, y+4);
    line(x, y-5, x + (Math.random()-0.5) * 4, y+4);
    line(x, y-5, x + (Math.random()-0.5) * 4, y+4);
    line(x, y-5, x + (Math.random()-0.5) * 4, y+4);
};

class rocket_class { //the rocket class
    constructor(posX, posY, velocity, theta) {
        this._x = posX;
        this._y = posY;
        this._theta = theta;
        this._velocity = velocity;
        this._altitude = 797 - posY;
    }
    
    get x() {return this._x;}
    get y() {return this._y;}
    get theta() {return this._theta;}
    get velocity() {return this._velocity;}
    get altitude() {return this._altitude;}
    
    setAltitude() {
        this._altitude = 797 - this._y;
    }
    
    incrementx(i) {
        this._x += i;
    }
    
    incrementy(i) {
        this._y -= i;
        setAltitude();
    }
    
    incrementangle(i) {
        this._theta += i;
    }
    
    setVelocity(velocity) {
        this._velocity = velocity;
    }
    
    updatePos() {
        this._y -= Math.sin(this._theta * trig) * this._velocity;
        this._x += Math.cos(this._theta * trig) * this.velocity;
    }
}

//make a rocket
let rocket = new rocket_class(300, 750, 5, 75);
//rocket.setVelocity(1);

function setup() {
    createCanvas(1536, 797);
    stroke(255);
    frameRate(30);
    background(0);
}

function draw() {
  //rotate(0);
  background(0);
  drawRocket(rocket.x, rocket.y, 0);
  rocket.updatePos();
  rocket.incrementangle(-0.5);
}

