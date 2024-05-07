let hrLaPaz = 12;
let minLaPaz = 0;
let secLaPaz = 0;

let ap = 10; 
let sp = 0.1; 

function upHrLaPaz() {
  let hrInput = inputHourLaPaz.value();
  let hrArray = hrInput.split(':');
  hrLaPaz = parseInt(hrArray[0]);
  minLaPaz = parseInt(hrArray[1]);
}

function draw() {
  background("black");
  
  secLaPaz++;

  switch (true) {
      case secLaPaz === 60:
          secLaPaz = 0;
          minLaPaz++;
          break;
      case minLaPaz === 60:
          minLaPaz = 0;
          hrLaPaz++;
          break;
      case hrLaPaz === 24:
          hrLaPaz = 0;
          break;
  }

  inputHourLaPaz.value(`${hrLaPaz.toString().padStart(2, '0')}:${minLaPaz.toString().padStart(2, '0')}`);

  //  Initial setting  hora La Paz
  drawClock(500, height / 2, hrLaPaz, minLaPaz, secLaPaz);
  textSize(20)
  fill(255);
  text('La Paz', 468, height / 2 + 200);
 

  //   Initial setting hora Ciudad de México
  let hrCDMX = (hrLaPaz +1  + 24) % 24;
  drawClock(850, height / 2, hrCDMX, minLaPaz, secLaPaz);
  fill(255);
  text('CDMX',815 , height / 2 + 200);

  
  //   Initial setting  hora Barcelona
  let hrBarcelona = (hrLaPaz + 8  + 24) % 24;
  drawClock(1200, height / 2, hrBarcelona, minLaPaz, secLaPaz);
  text('Barcelona',1156 , height / 2 + 200);

 
  let osc = ap * sin(sp * secLaPaz);
  push();
  translate(500, height / 2);
  rotate(radians(osc));
  drawClock(0, 0, hrLaPaz, minLaPaz, secLaPaz);
  pop();

  push();
  translate(850, height / 2);
  rotate(radians(osc));
  drawClock(0, 0, hrCDMX, minLaPaz, secLaPaz);
  pop();

  push();
  translate(1200, height / 2);
  rotate(radians(osc));
  drawClock(0, 0, hrBarcelona, minLaPaz, secLaPaz);
  pop();
}
