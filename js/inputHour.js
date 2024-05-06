let inputHourLaPaz;

function setup() {
    createCanvas(1600, 600);
    angleMode(DEGREES);

    inputHourLaPaz = createInput('12:00', 'time');
    let inputWidth = 200; 
    let inputX = (windowWidth - inputWidth) / 2; 
    let inputY = document.querySelector('h1').offsetTop + 120; 
    inputHourLaPaz.size(inputWidth); 
    inputHourLaPaz.position(inputX, inputY);
    inputHourLaPaz.input(upHrLaPaz);
    frameRate(1);
}