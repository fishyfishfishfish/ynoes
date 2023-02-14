function preload() {

}

function setup() {
    canvas = createCanvas(401, 437);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(401, 437);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("posenet is alive and not dead (;");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }
}



function draw() {
    image(video, 0, 0, 401, 437);
}

function takesnapshot() {
    save('example.png');
}