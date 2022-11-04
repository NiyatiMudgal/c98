var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("ta").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("ta").innerHTML = Content;
    console.log(Content);
    
    if(Content =="take my selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
}