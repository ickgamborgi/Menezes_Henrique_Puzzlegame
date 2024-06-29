console.log("JavaScript file is linked.");

// variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzlePieceDiv = document.querySelector(".puzzle-pieces")
let draggedPiece;

// functions
function changeBGImage(event) {
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
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

// events
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));











// METHOD 2
// console.log(event.currentTarget.id);
// puzzleBoard.style.backgroundImage = `url('../images/backGround$(event.currentTarget.id).jpg')`;