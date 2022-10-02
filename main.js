function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(' teachablemachine.withgoogle.com/models/FH7GwIdK5/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}