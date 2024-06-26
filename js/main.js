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
    console.log("User clicked on " + this.alt);
    const puzzleId = event.currentTarget.id;
    puzzleBoard.style.backgroundImage = `url('./images/backGround${puzzleId}.jpg')`; // For bug fix #5, we added the puzzleId variable and inside the string.

    // Here is where the fix for bug #2 will come — we will add a forEach loop that goes over all puzzle pieces and append them back to their original div.
    puzzlePieces.forEach(piece => {
        const pieceType = piece.getAttribute('data-piece');
        piece.src = `./images/${pieceType}${puzzleId}.jpg`; // To fix bug #5, we also added the puzzleId and pieceType variable to match the string.
        puzzlePieceDiv.appendChild(piece);
});
}

function handleStartDrag() {
    console.log(`User started dragging ${this}.`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("User stopped dragging.");
}

function handleDrop() {
    console.log("User dropped the piece.")
    
    // Here is where the fix for bug #1 will come — we will add an if/else statement so the piece can't be dropped if there is already one filling it.
    if (this.childNodes.length > 0) {
        return; // If there's already a child in the drop zone, do nothing = don't allow it to be dropped.
    } else {
        this.appendChild(draggedPiece); // Otherwise, append the dragged piece.
    }
}

// For bug #3, we will define the function for the reset button, bringing all pieces back.
function reset() {
    console.log ("User clicked to reset the puzzle.");

    // Bring the pieces back to original div.
    puzzlePieces.forEach(piece => {
        puzzlePieceDiv.appendChild(piece);
    });
}

// events
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// Here is where the fix for bug #3 starts, we will add an event listener to when the reset button is clicked and start a function.
resetButton.addEventListener("click", reset);

