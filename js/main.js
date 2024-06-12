console.log("JavaScript file is linked.");

// variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");

console.log(theButtons);
console.log(puzzleBoard);

// functions
function changeBGImage() {
    console.log("changeBGImage called");
    console.log(this.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;
    // 	background-image: url('../images/backGround0.jpg');
}

// events
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// METHOD 2
// console.log(event.currentTarget.id);
// puzzleBoard.style.backgroundImage = `url('../images/backGround$(event.currentTarget.id).jpg')`;