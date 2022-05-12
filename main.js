nosex=0;
nosey=0;


function preload(){
lipstick_image=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup(){
 canvas=createCanvas(300,300)
 canvas.center()
 video=createCapture(VIDEO)
 video.size(300,300)
 video.hide()
 poseNet=ml5.poseNet(video,modelLoaded)
 poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("poseNet Is Initialized")
    
}

function draw(){
    image(video,0,0,300,300)
    image(lipstick_image,nosex-20,nosey+15,60,30)
}
function take_snapshot(){
    save("mam.jpg")
}


function gotPoses(result){
    if(result.length>0)

    console.log(result)

    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;


    console.log("nose x="+nosex)
    console.log("nose y="+nosey)

    

    
}