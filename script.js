function playAudio(audioFile) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioFile;
    audioPlayer.play();
  }


const button = document.querySelectorAll('button')



button.addEventListener('keydown', function(e) {
    if (e.key === [a,s,d,f,g,h,j,k,l]) {
      // Handle the keydown here
      playAudio();
      console.log('Space pressed!');
    }
  });






