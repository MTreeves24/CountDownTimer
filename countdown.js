var body = document.querySelector("body")
var start = document.querySelector(".startButton")
var reset = document.querySelector(".resetButton")
var displayText = document.querySelector("h3")
var countDownValue = document.querySelector("input")
var audio = new Audio("templebell.mp3");
var currentValue = 60;


function countDown(seconds){
      const intervalId = setInterval(() => {
        seconds--;
        start.disabled = true;
        if(seconds>10){
            displayText.innerHTML = ("You have " + seconds + " seconds remaining")
        } else if(seconds<11 && seconds > 0){
            displayText.innerHTML = ("You only have " + seconds + " seconds left!")
        } else{
            displayText.innerHTML = ("Time's up!")
            audio.play();
            clearInterval(intervalId);
            body.classList.toggle("timeup")
        }
    },1000)
}


countDownValue.addEventListener("change",() => {
    currentValue = countDownValue.value;
    body.classList.remove("timeup");
});

start.addEventListener("click",() => {
    countDown(currentValue);
    audio.currentTime = 0;
});


reset.addEventListener("click", () => {
    displayText.textContent = "Play again?"
    body.classList.remove("timeup")
    audio.pause();
    // clearInterval(intervalId)
    start.disabled = false;
})
