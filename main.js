video = "";

function preload()
{
    video = createVideo('mp4.video');
    video.hide();
}

function setup()
{
    canvas = createCanvas( 480 , 380 );
    canvas.center();
}

function draw()
{
    image ( video , 0 , 0 , 480 , 380 );
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd , modelloaded');
    document.getElementById("status").innerHTML = "Status : Detecting Object " ;
}

function modelloaded()
{
    console.log("Model Loaded!")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(2);
}