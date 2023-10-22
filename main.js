Webcam .set({
    width:350,
height:300,
image_format:"png",
png_quality:500
})
camera=document.getElementById("camera")
Webcam .attach("#camera")
function take_snapshot(){
    Webcam .snap(function(datauri){
        document.getElementById("selfieimage").src=datauri
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A_Rhe5liR/model.json",modelloaded)
function modelloaded(){
    console.log("modelisloaded")
}
function check(){
    img=document.getElementById("selfieimage")
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
    if (error) {
  console.log(error)      
    } else {
        console.log(results)
        document.getElementById("Object").innerHTML=results[0].label
        document.getElementById("Accuracy").innerHTML=(results[0].confidence).toFixed(1)
    }
}