Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");

function take_pic() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + pic + '">';
    });;
}
console.log("ML5 version:", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nWS-KnJtb/model.json", model_ready);

function model_ready() {
    console.log("model succesfully loaded")
}

function check_pic() {
    img = document.getElementById("capture_image");
    classifier.classify(img, get_result)
}

function get_result(e,r){
    if(e){
        console.error(e);
    }else{
        console.log(r);
        document.getElementById("obj_name").innerHTML=r[0].label;
        document.getElementById("obj_accuracy").innerHTML=r[0].confidence.toFixed(3)
    }
}