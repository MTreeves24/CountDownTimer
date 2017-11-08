var body = document.querySelector("body")
var start = document.querySelector(".startButton")
var reset = document.querySelector(".resetButton")
var displayText = document.querySelector("span")
var countDownValue = document.querySelector("input")

currentValue = 60;


function countDown(seconds){
      intervalId = setInterval(function(){
        seconds --;
        start.disabled = true;
        if(seconds>10){
            displayText.innerHTML = ("You have " + seconds + " seconds remaining")
        } else if(seconds<11 && seconds > 0){
            displayText.innerHTML = ("You only have " + seconds + " seconds left!")
        } else{
            displayText.innerHTML = ("Time's up!")
            clearInterval(intervalId)
            body.classList.toggle("timeup")
        }
    },1000)
}


countDownValue.addEventListener("change", function(){
    currentValue = this.value;
    body.classList.remove("timeup")
});

start.addEventListener("click",function(){
    countDown(currentValue)
});


reset.addEventListener("click", function(){
    displayText.textContent = "Play again?"
    body.classList.remove("timeup")
    clearInterval(intervalId)
    start.disabled = false;
})

// function resetInterval() {
//   clearInterval(intervalId);
//  }


    // reset.addEventListener("click", function(){
    //     displayText.textContent = "Play again?"
    //     body.classList.remove("timeup")
    //     clearInterval(intervalId)
    // })

