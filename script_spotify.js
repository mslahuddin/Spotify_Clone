
document.addEventListener("DOMContentLoaded", (event) => {


  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////Puase button//////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


let pauseButton = document.createElement("div");
pauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">' +
  '<circle cx="50" cy="50" r="50" fill="#1DB954"/>' +
  '<rect x="30" y="30" width="10" height="45" fill="black"/>' +
  '<rect x="60" y="30" width="10" height="45" fill="black"/>' +
'</svg>';
pauseButton.setAttribute("class", "pauseButton"); 




////////////////////////////////////////////////////////////////////////////////////
///////////////////////////appending//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
let playButtons = document.getElementsByClassName("playButton");


Array.from(playButtons).forEach(playButton => {
    playButton.insertAdjacentElement('afterend', pauseButton.cloneNode(true));
});




/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// button Display : none//////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
let pauseButtons = document.getElementsByClassName("pauseButton");
 for (let i = 0; i < pauseButtons.length; i++) {
     pauseButtons[i].style.display="none";
 }

//   for (let i = 0; i < playButtons.length; i++) {
//      playButtons[i].style.display="block";
//   }





// Toggle function
function toggleButton(i) {
   
        if (playButtons[i].style.display =='none') {
            playButtons[i].style.display = 'block';
            pauseButtons[i].style.display = 'none';
            audioPause();
           
        
           
        } 
        else {
            playButtons[i].style.display = 'none';
            pauseButtons[i].style.display = 'block';
            playMusic();
          
    }
  
}


for (let i = 0; i < pauseButtons.length; i++) {
    pauseButtons[i].addEventListener('click', function() {
        toggleButton(i);
    });
    playButtons[i].addEventListener('click', function() {
        toggleButton(i);
    });

}





/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Audio array//////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
    
    var audio = []; 
    for (let i = 0; i < 6; i++) {
        audio[i] = new Audio("../Spotify_clone/songs/"+i+".mp3");
    }
    

function playMusic(){
   
   
    audio[0].play(); 
}


function audioPause() {
    audio[0].pause();
    // audio.currentTime = 0; // Reset the audio to the beginning
}





});

