const message="Hello world";
document.querySelector('#header').innerHTML=message;
console.log(message);
function setup(){
    createCanvas(100,100);
    noLoop();
}
function draw(){
    background(200);
    FileList(255,204,0);
    CSSNumericValue(30,30,20);
}