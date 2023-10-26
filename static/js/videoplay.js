function playVideoAtTime(timeInSeconds) {
    const video = document.querySelector('video');
    if (video) {
        video.currentTime = timeInSeconds;
        video.play();
    } else {
        console.error('Video element not found');
    }
}


document.querySelector('.btn-play-time').addEventListener('click', function(){
    playVideoAtTime(10)

})