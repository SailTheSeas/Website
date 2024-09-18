function playPause(videoId) {
    let thisVideo = document.getElementById(videoId);
    let thisButton = document.getElementById(`button${videoId}`);
    if (thisVideo.paused) {
        thisButton.innerText = "Pause"
        thisVideo.play();
    }
    else {
        thisVideo.pause();
        thisButton.innerText = "Play"
    }
     
} 

function changeVolume(videoId) {
    let thisVideo = document.getElementById(videoId);
    let thisSlider = document.getElementById(`slider${videoId}`);
    thisVideo.volume = thisSlider.value/100;
}