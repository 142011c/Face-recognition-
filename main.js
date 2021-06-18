Webcam.set({
width:350,
height:300,
image_format:'jpg',
jpg_quality:100
});
cam=document.getElementById("#camera");
Webcam.attach("#camera");

function snap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">'
    });
}
console.log("ml5 version",ml5.version);
 teach=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R-Ad7Tl0T/model.json',modelLoaded);
 function modelLoaded(){
     console.log("modelLoaded");
 }

 function Check(){
     img=document.getElementById("photo");
     teach.classify(img,gotResult);
 }
 function gotResult(error,results){
if (error){
    console.error(error);
}
else {
    console.log(results);
    document.getElementById("obname").innerHTML=results[0].label;}
 }