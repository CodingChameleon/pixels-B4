function setUp(){
    createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width)*4;
            
            pixels[startingIndex] = row-10; //r or red//
            pixels[startingIndex + 1] = col+21; //g or green//
            pixels[startingIndex + 2] = 150; //b or blue//
            pixels[startingIndex + 3] = 150; //a or alpha-transparensy//
        }
    }
    
    updatePixels();
}
