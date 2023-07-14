document.addEventListener('keydown', function(event) {
    const charCode = event.charCode;
    const keyCode = event.keyCode;
    const key = event.key;
    
    document.getElementById('box1').textContent = 'Character Code: ' + charCode;
    document.getElementById('box2').textContent = 'Key Code: ' + keyCode;
    document.getElementById('box3').textContent = 'Key Value: ' + key;
  });