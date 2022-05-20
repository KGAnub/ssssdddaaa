img = "";
status = "";
function preload() {
    img = loadImage("Mi-QLED-TV-4k.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}

function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("tv", 210, 45);
noFill();
stroke("#FF0000");
rect(195, 23.6, 250, 240);

fill("#FF0000");
text("Chair",125 , 255);
noFill();
stroke("#FF0000");
rect(120, 240, 110, 150);

}

function modelLoaded() {
    console.log("ModelLoaded !");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log("error");
    }
    console.log("results");
        
    
}
