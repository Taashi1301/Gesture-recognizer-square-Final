NoseX=0;
NoseY=0;
LeftWristX=0;
RightWristX=0;
difference=0;
function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(700, 250);
    video = createCapture(VIDEO);
    video.position(100, 250);
    video.size(300, 300);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", Gotpose);
}

function draw(){
    background("#111010");
    fill(0,0,255);
    stroke(255,0,0);
    strokeWeight(10);
    square(NoseX, NoseY, difference);
}

function modelLoaded(){
    console.log("Model is ready");
}

function Gotpose(results){
    if (results.length > 0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log(NoseX, NoseY);
        LeftWristX=results[0].pose.leftWrist.x;
        RightWristX=results[0].pose.rightWrist.x;
        difference=floor(LeftWristX-RightWristX);
        console.log(difference);
        document.getElementById("side").innerHTML="Side of the square is: " + difference+" px"
    }
}