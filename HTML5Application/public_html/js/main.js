/* global width, height */

let trig = Math.PI/180;  //a trig multiplier for degrees to radians, which is what the js math library uses

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
}

//make a rocket
let rocket = new rocket_class(750, 350, 0, 90);

function setup() {
    createCanvas(1536, 797);
    stroke(255);
    frameRate(30);
}

function draw() {
  background(0);
  ellipse(rocket.x, rocket.y, 50, 50);
  rocket.incrementy(1);
}

