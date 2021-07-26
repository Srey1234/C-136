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
    if(status != "")
    {
        objectDetector.detect( video , gotResults);
          for (i = 0 ; i <object.length ; i++)
          {
              document.getElementById("status").innerHTML=" Status : Objects Dectected"
              document.getElementById("number_of_object").innerHTML=" Number of object detected are : " + object.length;

                fill( "#FF0000" );
                 precent = floor ( objects[i].confidence * 100 ) ;
                 text( object[i].label + " " + precent + " % " , object[i].x +15, object[i].y + 15 );
                 oFill();
                 stroke( "#FF0000" );
                 rect (  object[i].x , object[i].y , object[i].width , object[i].height );
          }
    }
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

function gotResults( error , results )
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
}