
var button = document.getElementById("button");
var answer = document.getElementById("response");

let img = document.querySelector('img');
let emptyEightBall = document.getElementsByClassName("empty-eight-ball");

button.addEventListener("click", function () {
    $("img").toggleClass("shake");
    $("img").toggleClass("empty-eight-ball");
   

});



function eightBall() {
    
    let randomNumber = Math.floor(Math.random() * 3);

    if (response.style.display === "block") {
        response.style.display = "none";
      } else {
        response.style.display = "block";
      }


    if (randomNumber == 0) {
        answer.innerHTML = "Yes.";
    
    }
    if (randomNumber == 1) {
        answer.innerHTML = "No.";
    }
    if (randomNumber == 2) {
        answer.innerHTML = "Quite possibly.";
    }
    if (randomNumber == 3) {
        answer.innerHTML = "Forget it.";
    }
    


} 














/* button.addEventListener("click", function () { 
    let randomNumber = Math.floor(Math.random() * 8);

   if (randomNumber == 0) {
    document.getElementById("response").innerHTML = 'signs point to yes';
   }
   else if (randomNumber == 1) {
    document.getElementById("response").innerHTML = 'better not tell you now.';
   }
   else if (randomNumber == 2) {
    document.getElementById("response").innerHTML = 'Concentrate and ask again';
   }
   else if (randomNumber == 3) {
    document.getElementById("response").innerHTML = 'Reply hazy, try again later.';
   }
   else if (randomNumber == 4) {
    document.getElementById("response").innerHTML = 'My reply is no';
   }
   else if (randomNumber == 5) {
    document.getElementById("response").innerHTML = 'Maybe...';
   }
   else if (randomNumber == 6) {
    document.getElementById("response").innerHTML = 'It looks certain.';
   }
   else if (randomNumber == 7) {
    document.getElementById("response").innerHTML = 'Definitely';
   }
   else {
    document.getElementById("response").innerHTML = 'please ask a question';
   }

  
}); 
*/





