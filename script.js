let song1 = null;
let song2 = null;
let leftWristX = null;
let leftWristY = null;
let rightWristX = null;
let rightWristY = null;


function preload() {
    song1 = loadSound("Ripple - On Your Mind [NCS Release].mp3");
    song2 = loadSound("Max Brhon - AI [NCS Release].mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);
}

function modelLoaded() {
    console.log("Model Successfully Loaded");
}

function getPoses(results) {
    if(results.length > 0 ) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    }
}

function draw() {
    image(video,0,0,600,500)
}