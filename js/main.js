console.log("JavaScript file is linked.");

// variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzlePieceDiv = document.querySelector(".puzzle-pieces");
const resetButton = document.querySelector("#resetBut")
let draggedPiece;

// functions
function changeBGImage(event) {
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;

    // Here is where the fix for bug #2 will come — we will add a forEach loop that goes over all puzzle pieces and append them back to their original div.
    puzzlePieces.forEach(piece => puzzlePieceDiv.appendChild(piece));
}

function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over");
}

function handleDrop() {
    // Here is where the fix for bug #1 will come — we will add an if/else statement so the piece can't be dropped if there is already one filling it.
    if (this.childNodes.length > 0) {
        return; // If there's already a child in the drop zone, do nothing = don't allow it to be dropped.
    } else {
        this.appendChild(draggedPiece); // Otherwise, append the dragged piece.
    }
}

// For bug #3, we will define the function for the reset button, bringing all pieces back and going to first puzzle.
function reset() {
    puzzlePieces.forEach(piece => puzzlePieceDiv.appendChild(piece)); // Bring the pieces back to original div.
    puzzleBoard.style.backgroundImage = `url(./images/background0.jpg)`; // Set background back to first puzzle.
}

// events
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// Here is where the fix for bug #3 starts, we will add an event listener to when the reset button is clicked and start a function.
resetButton.addEventListener("click", reset);











// METHOD 2
// console.log(event.currentTarget.id);
// puzzleBoard.style.backgroundImage = `url('../images/backGround$(event.currentTarget.id).jpg')`;