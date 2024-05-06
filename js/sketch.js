const clockRadius = 170;
const hrHandLength = 100;
const minHandLenght = 80;
const secHandLenght = 90;
const hrHandWidth = 4;
const minHandWidth = 2;
const secHandWidth = 1;

function drawClock(x, y, hr, min, sec) {

    midpointCircle(x, y);
    push();
    translate(x, y);
    rotate(-90);

    textSize(10);
    textAlign(CENTER, CENTER);
    noStroke();
    
    let angleHr = map(hr % 12, 0, 12, 0, 360);
    drawHand(hrHandLength, angleHr, hrHandWidth, color("blue"));

    let angleMin = map(min, 0, 60, 0, 360);
    drawHand(minHandLenght, angleMin, minHandWidth, color("blue"));

    let angleSec = map(sec, 0, 60, 0, 360);
    drawHand(secHandLenght, angleSec, secHandWidth, color("red"));

    
    pop();
    textSize(20)
    fill(255);
    for (let i = 0; i < 12; i++) {
        let vector = p5.Vector.fromAngle(i * TWO_PI / 12 - HALF_PI);
        vector.mult(150);
        text(i == 0 ? 12 : i, vector.x, vector.y);
    }
    
}

function drawHand(length, angle, thickness, color) {
    stroke(color);
    strokeWeight(thickness);
    line(0, 0, length * cos(angle), length * sin(angle));
}

function midpointCircle(xc, yc) {
    stroke(255);
    let x = 0;
    let y = clockRadius;
    let p = 5 / 4 - clockRadius;

    while (x < y) {
        x++;
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * x + 1 - 2 * y;
        }

        let points = [
            [x, y], [y, x], [-y, x], [-x, y],
            [-x, -y], [-y, -x], [y, -x], [x, -y]
        ];

        for (let i = 0; i < points.length; i++) {
            let pointX = points[i][0];
            let pointY = points[i][1];
            fill
            ellipse(xc + pointX, yc + pointY, 2, 2);
        }
        
    }
    
}

function drawLine(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
  
    const m = dy / dx;
    const b = y1 - m * x1;
  
    let x = x1;
    let y = y1;
  
    point(x, y);
  // Calcula y usa la ecuación punto-pendiente
    while (x < x2) {
        x += 1; 
        y = m * x + b; 
        point(x, y); 
        
    }
    
}



