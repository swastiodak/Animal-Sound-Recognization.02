function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9HKYg2WUm/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    console.log(results);
}