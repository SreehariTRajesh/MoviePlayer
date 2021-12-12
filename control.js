var video=document.getElementById("movie")
var pauseButton=document.getElementById("pause");
var playButton=document.getElementById("play");
var forwardButton=document.getElementById("forward");
var backwardButton=document.getElementById("backward");
function Backward(){
    c=video.currentTime;
    document.getElementById("y").style.backgroundColor="yellow";
    video.currentTime=c-5;
}
function Play(){
    video.play();
    document.getElementById("g").style.backgroundColor="#00ff00";
    document.getElementById("r").style.backgroundColor="#800000";
    document.getElementById("y").style.backgroundColor="darkgoldenrod"
}
function Pause(){
    video.pause();
    document.getElementById("r").style.backgroundColor="#ff0033";
    document.getElementById("g").style.backgroundColor="green";
    document.getElementById("y").style.backgroundColor="darkgoldenrod"
}
function Forward(){
    c=video.currentTime;
    document.getElementById("y").style.backgroundColor="yellow";
    video.currentTime=c+5;
}