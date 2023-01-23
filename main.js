//--https://teachablemachine.withgoogle.com/models/-VWMRIUdI/

Webcam.set({
    width: 300,
    height: 350,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach("#camera")

function Cap(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='imgdis' src="+data_uri+">"
    })    
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-VWMRIUdI/model.json", modelLoaded);



function modelLoaded(){
    console.log("model has been loaded successfully");
}


function Iden(){
    i = document.getElementById('imgdis');
    classifier.classify(i,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        document.getElementById('objName').innerHTML = "Object : " + results[0].label;
        p = results[0].confidence;
        document.getElementById('objAcc').innerHTML = "Accuracy : " + p.toFixed(2) + " %";
    }
}