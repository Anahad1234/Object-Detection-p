status=""
function setup()
{
    canvas.createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("staus").innerHTML = "Status = Dectecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.dectect(img, gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}